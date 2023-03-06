import Venue from "../models/Venue.js";
import User from "../models/User.js";
import ApiFeatures from "../utils/apifeatures.js";
import cloudinary from "cloudinary";


//Create Venue
export const createVenue = async (req,res) => {
    try{
        const myCloudResponses = await Promise.all(req.body.images.map(async image => {
            const myCloud = await cloudinary.v2.uploader.upload(image, {
              folder: "Venue",
            });
            return {
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            };
          }));
      const newVenueData = {
        name: req.body.name,
        room_no: req.body.room_no,
        location: req.body.location,
        capacity: req.body.capacity,
        facilities: req.body.facilities,
        images: myCloudResponses,
      };
  
      const venue = await Venue.create(newVenueData);
      const user = await User.findById(req.user.id);
  
      await user.save();
      res.status(201).json({
        success: true,
        message: "Venue created",
        venue
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Delete Venue
export const deleteVenue = async (req,res) => {
    try {
        const venue = await Venue.findById(req.params.id);
    
        if (!venue) {
          return res.status(404).json({
            success: false,
            message: "Venue not found",
          });
        }

        await Promise.all(
            venue.images.map(async (image) => {
              await cloudinary.v2.uploader.destroy(image.public_id);
            })
          );
    
        await venue.remove();
    
        const user = await User.findById(req.user.id);
    
        await user.save();
    
        res.status(200).json({
          success: true,
          message: "Venue deleted",
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Update Venue
export const updateVenue = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.id);
    
        const { name, room_no , location, capacity, facilities, images } = req.body;

        if (!venue) {
            return res.status(404).json({
              success: false,
              message: "Venue not found",
            });
        }
    
        if (name) {
          venue.name = name;
        }
        if (room_no) {
          venue.room_no = room_no;
        }
        if (location) {
            venue.location = location;
        }
        if (capacity) {
          venue.capacity = capacity;
        }
        if (facilities) {
          venue.facilities = facilities;
        }
        if (images) {
            const imageUploadPromises = images.map(async (image) => {
              const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "Venue",
              });
              return {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            });
      
            const uploadedImages = await Promise.all(imageUploadPromises);
            venue.images = uploadedImages;
          }
    
        await venue.save();
        res.status(200).json({
          success: true,
          message: "Venue updated",
          venue
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


export const getVenue = async (req,res,next)=>{
    try{
        const venue = await Venue.findById(req.params.id);
        res.status(200).json(venue);
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};

export const getallVenue = async (req,res,next)=>{
    const apiFeatures = new ApiFeatures(Venue.find(),req.query).search().filter();
    try{
        const venue = await apiFeatures.query;
        res.status(200).json(venue);
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};
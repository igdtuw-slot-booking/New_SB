import Venue from "../models/Venue.js";
import User from "../models/User.js";
import ApiFeatures from "../utils/apifeatures.js";
import cloudinary from "cloudinary";


//Create Venue
export const createVenue = async (req,res) => {
    try{
      const { name, room_no, location, capacity, facilities, image } = req.body;
  
      // create new venue with image urls and public_ids
      const venue = new Venue({
        name,
        room_no,
        location,
        capacity,
        facilities,
        image: [{
          public_id: image.public_id,
          url: image.url
        }]
      });
  
      await venue.save();
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

        // delete images from cloudinary
        const publicIds = venue.image.map(img => img.public_id);
        await cloudinary.v2.api.delete_resources(publicIds);
    
        await venue.remove();
    
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
    
        const { name, room_no , location, capacity, facilities, imagesToDelete } = req.body;

        if (!venue) {
            return res.status(404).json({
              success: false,
              message: "Venue not found",
            });
        }

        // upload new images to cloudinary
    const folderName = 'Venues'; // specify folder name
    const newImages = req.files ? await Promise.all(req.files.map(file => cloudinary.v2.uploader.upload(file.path, { folder: folderName }))) : [];

    // delete images from cloudinary
    const publicIds = venue.image
      .filter(img => imagesToDelete ? !imagesToDelete.includes(img.public_id) : true)
      .map(img => img.public_id);
    await cloudinary.v2.api.delete_resources(publicIds);
    
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
        if (image) {
          venue.image = [
            ...venue.image.filter(img => !publicIds.includes(img.public_id)),
            ...newImages.map(result => ({
              public_id: result.public_id,
              url: result.secure_url
            }))
          ];
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

export const getAllVenue = async (req, res) => {
  const apiFeatures = new ApiFeatures(Venue.find(), req.query).search().filter();
  try {
    const venues = await apiFeatures.query;
   // const venues = await Venue.find();
    res.status(200).json({
      success: true,
      venues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
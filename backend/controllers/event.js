import Event from "../models/Event.js";
import Venue from "../models/Venue.js";
import User from "../models/User.js";
import ApiFeatures from "../utils/apifeatures.js";


export const createEvent = async (req,res,next)=>{
    try{
      const newEventData = {
        society: req.body.society,
        user: req.user.id,
        date: req.body.date,
        time_Start: req.body.time_Start,
        time_End: req.body.time_End,
        issuer: req.body.issuer,
        document: req.body.document,
        euipment: req.body.euipment,
        status: req.body.status,
        venue: req.body.venue,
        
      };
  
      const event = await Event.create(newEventData);
      const user = await User.findById(req.user.id);
  
      user.events.unshift(event._id);
  
      await user.save();
      res.status(201).json({
        success: true,
        message: "Event created",
        event
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Update Achievement descriptions
export const updateEventDesc = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
    
        const { society, eventDesc , date, time_Start, time_End, issuer, document, euipment, venue  } = req.body;

        if (!event) {
            return res.status(404).json({
              success: false,
              message: "Event not found",
            });
        }
      
        if (event.user.toString() !== req.user.id.toString()) {
            return res.status(401).json({
              success: false,
              message: "Unauthorized",
            });
        }
    
        if (society) {
          event.society = society;
        }
        if (eventDesc) {
          event.eventDesc = eventDesc;
        }
        if (date) {
            event.date = date;
        }
        if (time_Start) {
          event.time_Start = time_Start;
        }
        if (time_End) {
          event.time_End = time_End;
        }
        if (issuer) {
          event.issuer = issuer;
        }
        if (document) {
            event.document = document;
        }
        if (euipment) {
          event.euipment = euipment;
        }
        if (venue) {
          event.venue = venue;
        }
    
        await event.save();
        res.status(200).json({
          success: true,
          message: "Event updated",
          event
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};

//Update event status --admin
export const updateEventStatusAdmin = async (req,res,next)=>{
    try{
        //const updateEvent = await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        const updateEvent = await Event.findById(req.params.id);

        if(!updateEvent){
            return res.status(404).json({
                success: false,
                message: "Event not found with this Id",
            });
        };

        if(updateEvent.status=== "Approved"){
            return res.status(400).json({
                success: false,
                message: "You have already approved this event",
              });
        };
        if(updateEvent.status=== "Declined"){
            return res.status(400).json({
                success: false,
                message: "You have already declined this event",
              });
        };
        updateEvent.status = req.body.status;

        if(req.body.status === "Approved" || req.body.status === "Declined"){
            updateEvent.reviewedAt = Date.now();
        };

        await updateEvent.save({ validateBeforeSave: false});
        return res.status(200).json({
            success: true,
            message: `Event status updated to ${updateEvent.status}`,
          });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Decline Event by admin ***************don't use for now
export const deleteEvent = async (req,res,next)=>{
    try{
        //await Event.findByIdAndDelete(req.params.id);
        const event = await Event.findById(req.params.id);
        if(!event){
            return next(createError(404, "Event not found with this Id"));
        }
        await event.remove();
        res.status(200).json("Event declined")
    } catch(err){
        next(err);
    }
};


//Get Single Event
export const getSingleEvent = async (req,res,next)=>{
    try{
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({
                success:false,
                message: "Event not found",
            })
        }
        res.status(200).json({
            success:true,
            event,
        })
    } catch(error){
        res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Get logged in user Events
export const myEvents = async (req,res,next)=>{
    //console.log(req.user.id);
    const apiFeatures = new ApiFeatures(Event.find({ user: req.user.id }),req.query).filter();
    try{
        const events = await (apiFeatures.query);
        
        res.status(200).json({
            success:true,
            events,
        })
    } catch(error){
        res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Get all Events
export const getallEvent = async (req,res)=>{
  const apiFeatures = new ApiFeatures(Event.find(), req.query).search().filter();
    try{
      const event = await apiFeatures.query;
        //const event = await Event.find().populate("user");
        res.status(200).json({
          success:true,
          event,
      })
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};



export const countByStatus = async (req,res,next)=>{
    const statuses = req.query.status.split(',')
    try{
        const list = await Promise.all(statuses.map(status=>{
            return Event.countDocuments({status:status})
        }))
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};

//Update event status to cancel --user
export const updateEventByUser = async (req,res,next)=>{
    try{
        //const updateEvent = await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        const updateEvent = await Event.findById(req.params.id);

        if(!updateEvent){
            return res.status(404).json({
                success: false,
                message: "Event not found with this Id",
            });
        };

        if(updateEvent.user == req.user.id){

            if(updateEvent.status=== "Cancelled"){
                return res.status(400).json({
                    success: false,
                    message: "You have already cancelled this event",
                  });
            };
            updateEvent.status = req.body.status;

            if(req.body.status === "Cancelled"){
                updateEvent.reviewedAt = Date.now();
            };
        }else{
            return res.status(400).json({
                success: false,
                message: "You are not authorized",
              });
        };
        
        await updateEvent.save({ validateBeforeSave: false});
        return res.status(200).json({
            success: true,
            message: `Event status updated to ${updateEvent.status}`,
          });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};

export const booking = async (req, res) => {
  const apiFeatures = new ApiFeatures(Event.find(), req.query).search().filter();
  try {
    const events = await apiFeatures.query;
   // const venues = await Venue.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

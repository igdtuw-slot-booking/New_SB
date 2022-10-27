import mongoose from 'mongoose';

const VenueSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },
    room_no:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true
    },
    capacity:{
        type: Number
    },
    facilities:{
        type: [String]
    },
    photos:{
        type: Array
    }
    
}
);

export default mongoose.model("Venue", VenueSchema)
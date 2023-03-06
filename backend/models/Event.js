import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({

    society:{
        type: String,
        required: [true, "Enter name of the organisation/society"]
    },
    eventDesc:{
        type: String,
        required: [true, "Enter event details"]
    },
    date:{
        type: String,
        required: false
    },
    time_Start:{
        type: String,
        required: true
    },
    time_End:{
        type: String,
        required: true
    },
    issuer:{
        type: String,
    },
    document:{
        type: String               //documents ka type ekk baar check kar lena
    },
    euipment:{
        type: [String]           
    },
    status:{
        type: String,
        default: "Pending",
    },
    venue:{
        type:mongoose.Schema.ObjectId,
        ref: "Venue",
        required: true
    },
    reviewedAt: Date,
    bookedAt:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
    }
    
});

export default mongoose.model("Event", EventSchema)

/*

venuename:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    equipments:{
        type: [String],
        required: false
    },
    photos:{
        type: [String],
        required: false
    },
    status:{
        type: String,
        default: "Pending"
    }


photos:{
    type: [String],
    required: false
},
status:{
    type: String,
    default: "Pending"
}

*/
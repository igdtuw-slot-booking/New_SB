import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({

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
    status:{
        type: String,
        default: "Pending"
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
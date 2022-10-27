import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,                    //while testing.. yea attribute default to false le raha hai but even true type karne pe bhi db mea false store ho raha hai ..sonekk baar dekh lena
        default: false
    }
    
}, {timestamps: true}
);

export default mongoose.model("User", UserSchema)
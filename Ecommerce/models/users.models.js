import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
    },
},{timestamps:true})



export const User = mongoose.model('User',userSchema)
// in mongoDb, User will be stored in uppercase and plurals. It will become as users

import mongoose from "mongoose";
import { User } from "./users.models";

const productSchema = new mongoose.Schema({
    discription: {
        type :String,
        required: true,
    },
    name: {
        type :String,
        required: true,
    },
    productImage : {
        type :  String
    },
    price:{
        type :Number,
        default:0,
    },
    stock:{
        type: Number,
        default: 0,
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : Category,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required: true,
    }


},{timestamps:true});

const Product = mongoose.model('Product', productSchema);
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    phone : {
        type : String ,
        required : true,
        unique : true
    },
    name : {
        type : String,
    },
    role : {
        type : String,
        default : "user"
    }
},{timestamps : true})

export default mongoose.models.User || mongoose.model("User", UserSchema);
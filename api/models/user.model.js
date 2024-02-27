import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},{timestamps: true});  // timestamps will automatically add the created_at and updated_at fields to the schema.
const User = mongoose.model('User', userSchema);
export default User;  // This is the model that we will use to interact with the database.
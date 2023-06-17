import mongoose from "mongoose";
import userSchema from "./user-schema";
const userModel = mongoose.model('UserModel', userSchema);
export default userModel;
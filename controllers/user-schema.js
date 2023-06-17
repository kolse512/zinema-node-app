import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  userName: String,
  dob: Date,
  userType: {
    type: String,
    enum: ['BASIC', 'PREMIUM', 'ADMIN']
  },
  username: String,
  password: String,
  email: String,
  followerList: [mongoose.Types.ObjectId],
  billingId: mongoose.Types.ObjectId,
  watchList: [mongoose.Types.ObjectId],
  followingList: [mongoose.Types.ObjectId],
  profilePicture: String,
  firstName: String,
  lastName: String
}, {collection: 'users'});
export default userSchema;
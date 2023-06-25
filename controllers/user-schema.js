import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  dob: Date,
  userType: {
    type: String,
    enum: ['BASIC', 'PREMIUM', 'ADMIN']
  },
  username: String,
  password: String,
  email: String,
  followerList: [{ "user_id": mongoose.Types.ObjectId }],
  billingId: mongoose.Types.ObjectId,
  watchList: [{ "movie_id": String }],
  followingList: [{ "user_id": mongoose.Types.ObjectId }],
  favorites: [{ "movie_id": Number }],
  profilePicture: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  cardsList: [mongoose.Types.ObjectId],
  billingStatus: {
    type: String,
    enum: ['PAID', 'PENDING']
  },
}, { collection: 'users' });
export default userSchema;

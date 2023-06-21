import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    // required: true
  },
  commentData: {
    type: String,
    // required: true
  },
  firstName: String,
  lastName: String
});

const movieSchema = mongoose.Schema({
  name: String,
  dateAdded: Date,
  dateExpiry: Date,
  contentType: {
    type: String,
    enum: ['BASIC', 'PREMIUM', 'ADMIN']
  },
  comments: [commentSchema]
}, { collection: 'movies' });

export default movieSchema;

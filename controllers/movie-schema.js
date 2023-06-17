import mongoose from 'mongoose';
const movieSchema = mongoose.Schema({
  name: String,
  dateAdded: Date,
  dateExpiry: Date,
  contentType: {
    type: String,
    enum: ['BASIC', 'PREMIUM', 'ADMIN']
  },
}, {collection: 'movie'});
export default movieSchema;
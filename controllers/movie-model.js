import mongoose from "mongoose";
import movieSchema from "./movie-schema";
const movieModel = mongoose.model('MovieModel', movieSchema);
export default movieModel;
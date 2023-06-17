import movieModel from "./movie-model";
export const findMovieById = (mid) => movieModel.findById(mid);
export const findMovieByContentType = (contentType) => movieModel.findOne({ contentType });
export const createMovie = (movie) => movieModel.create(movie);
export const deleteMovie = (mid) => movieModel.deleteOne({_id: mid});
export const updateMovie = (mid, movie) => movieModel.updateOne({_id: mid}, {$set: movie});
export const findAllMovies = () => movieModel.find({});
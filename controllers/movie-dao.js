import movieModel from "./movie-model.js";
export const findMovieById = (mid) => movieModel.findById(mid);
export const findMovieByContentType = (contentType) => movieModel.findOne({ contentType });
export const createMovie = (movie) => movieModel.create(movie);
export const deleteMovie = (mid) => movieModel.deleteOne({ _id: mid });
export const updateMovie = (mid, movie) => movieModel.updateOne({ _id: mid }, { $set: movie });
export const findAllMovies = () => movieModel.find({});


export const addComment = (mid, comment) => {
  try {
    let movie = movieModel.findById(mid);

    if (!movie) {
      // Movie doesn't exist, create a new movie object
      movie = movieModel.create(movie);
      movie.comments.push(comment)
    } else {
      // Movie exists, append the comment to the existing movie object
      movie.comments.push(comment);
      // await movie.save();
    }

    // might have to comment this out as we aren't returning anything? Or maybe I can keep it and just 
    // not return
    return movie;
  } catch (error) {
    throw error;
  }
};
export const fetchComments = (mid) => {
  try {
    const movie = movieModel.findById(mid);

    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie.comments;
  } catch (error) {
    throw error;
  }
};

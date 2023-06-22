import movieModel from "./movie-model.js";
export const findMovieById = (mid) => movieModel.findById(mid);
export const findMovieByContentType = (contentType) => movieModel.findOne({ contentType });
export const createMovie = (movie) => movieModel.create(movie);
export const deleteMovie = (mid) => movieModel.deleteOne({ _id: mid });
export const updateMovie = (mid, movie) => movieModel.updateOne({ _id: mid }, { $set: movie });
export const findAllMovies = () => movieModel.find({});

// working methods so far:
// export const createComment = (mid) => movieModel.create(mid);
// export const findComments = (mid) => movieModel.findById(mid);
// export const updateComment = (mid, comment) => movieModel.updateOne({ _id: mid }, { $push: { comments: comment } });

export const createComment = (mid) => movieModel.create(mid);
export const findComments = (mid) => movieModel.findOne({ movie_id: mid });
export const updateComment = (mid, comment) => movieModel.updateOne({ movie_id: mid }, { $push: { comments: comment } });

// finding the movie and pushing comments into the comments array
// export const updateComment = (mid, comment) => {
//   try {
//     console.log("movie dao updateComment function");
//     let movie = movieModel.updateOne({ _id: mid }, { $push: { comments: comment } })
//     return movie
//   } catch (error) {
//     throw error;
//   }
// }

// creating a movie object for that specific comment and pushing it
// export const createComment = async (mid, comment) => {
//   try {
//     console.log("movie dao createComment function");
//     let movie = await movieModel.create(mid);
//     movie.comments.push(comment)
//     // might have to comment this out as we aren't returning anything? Or maybe I can keep it and just 
//     // not return
//     return movie;
//   } catch (error) {
//     throw error;
//   }
// };

// retrieving all comments from a specific movie
// export const findComments = (mid) => {
//   try {
//     console.log("movie dao findComments function");
//     const movie = movieModel.findById(mid);
//     if (!movie) {
//       throw new Error("Movie not found");
//     }
//     return movie;
//   } catch (error) {
//     throw error;
//   }
// };

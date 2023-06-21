import * as movieDao from "./movie-dao.js";

const MovieController = (app) => {
  // Other controller methods...

  const addComment = async (req, res) => {
    const { movieId } = req.params;
    const { comment } = req.body;

    try {
      const movie = await movieDao.addComment(movieId, comment);
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };

  const fetchComments = async (req, res) => {
    const { movieId } = req.params;

    try {
      const comments = await movieDao.fetchComments(movieId);
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };

  // Other controller methods...

  // another consideration, how to create and update comments in a single function?
  app.post("/api/movies/:movieId/comments", addComment);
  app.get("/api/movies/:movieId/comments", fetchComments);

  // Other routes...
};

export default MovieController;

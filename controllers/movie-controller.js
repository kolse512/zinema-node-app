import * as movieDao from "./movie-dao.js";

const MovieController = (app) => {

  const updateComment = async (req, res) => {
    const { movieId } = req.params;
    const { comment } = req.body;

    try {
      console.log("in movieController updateComment method");
      const movie = await movieDao.updateComment(movieId, comment);
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }

  }
  const createComment = async (req, res) => {
    const { movieId } = req.params;
    const { comment } = req.body;

    try {
      console.log("in movieController createComment method");
      const movie = await movieDao.createComment(movieId, comment);
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };

  const findComments = async (req, res) => {
    const { movieId } = req.params;

    try {
      console.log("in movieController findComments method");
      const comments = await movieDao.findComments(movieId);
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };

  // Other controller methods...

  // another consideration, how to create and update comments in a single function?
  app.post("/api/movies/comments/:movieId", createComment);
  app.get("/api/movies/comments/:movieId", findComments);
  app.put("/api/movies/comments/:movieId", updateComment);

  // Other routes...
};

export default MovieController;

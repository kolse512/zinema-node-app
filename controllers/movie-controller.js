import * as movieDao from "./movie-dao.js";

const MovieController = (app) => {

  const createComment = async (req, res) => {
    console.log("in movieController createComment method");
    const movie = await movieDao.createComment(req.body);
    console.log("req body in createComment: ", req.body)
    res.json(movie);
  };

  const updateComment = async (req, res) => {
    const { movieId } = req.params;
    console.log("in movieController updateComment method");
    console.log("req body test: ", req.body);
    const movie = await movieDao.updateComment(movieId, req.body);
    res.json(movie);
  };

  const findComments = async (req, res) => {
    const { movieId } = req.params;
    console.log("in movieController findComments method");
    const comments = await movieDao.findComments(movieId);
    console.log("comments: ", comments)
    res.json(comments);
  };


  // another consideration, how to create and update comments in a single function?
  app.post("/api/movies/comments/", createComment);
  app.get("/api/movies/comments/:movieId", findComments);
  app.put("/api/movies/comments/:movieId", updateComment);

  // Other routes...
};

export default MovieController;

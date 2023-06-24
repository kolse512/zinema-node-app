import * as usersDao from "./users-dao.js";
const AuthController = (app) => {
  const register = async (req, res) => {
    const user = await usersDao.findUserByUsername(req.body.username);
    if (user) {
      res.sendStatus(409);
      return;
    }
    const newUser = await usersDao.createUser(req.body);
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };

  const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await usersDao.findUserByCredentials(username, password);
    if (user) {
      console.log("In logn , user found = ", user);
      req.session["currentUser"] = user;
      res.json(user);
    } else {
      console.log("USER NOT FOUND in login");
      res.sendStatus(404);
    }
  };

  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      console.log("No current user in profile");
      res.sendStatus(404);
      return;
    }
    console.log('Current user in profile = ', currentUser);
    res.json(currentUser);
  };

  const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const update = async (req, res) => {
    const userId = req.session["currentUser"]._id;
    const updatedUser = await usersDao.updateUser(userId, req.body);
    if (!updatedUser) {
      res.sendStatus(404);
      return;
    }
    req.session["currentUser"] = updatedUser;
    res.json(updatedUser);
  };

  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.post("/api/users/profile", profile);
  app.post("/api/users/logout", logout);
  app.put("/api/users", update);
};
export default AuthController;
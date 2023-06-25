import * as usersDao from "./users-dao.js";

const UserController = (app) => {
  app.get('/api/users', findUsers);
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/update/anyuser', updateAnyUser);
  app.put('/api/users/movies/favorites/:uid', favoriteToggle);
  app.get('/api/users/firstname/:firstname', findUserByFirstName);
  app.get('/api/users/lastname/:lastname', findUserByLastName);
}

const findUserByFirstName = async (req,res) => {
  const fname = req.params.firstname;
  const users = usersDao.findUserOnFirstname(fname);
  res.json(users);
};

const findUserByLastName = async (req,res) => {
  const lname = req.params.lastname;
  const users = usersDao.findUserOnLastname(lname);
  res.json(users);
};


const favoriteToggle = async (req, res) => {
  const userId = req.params['uid'];
  console.log("user id in favorite toggle: ", userId)
  const body = req.body;
  console.log("body in favorite toggle: ", body)
  const typeUpdate = body.update;
  console.log("type update: ", body.update);
  delete body["update"];
  let status = null;

  if (typeUpdate) {
    status = await usersDao.addFavorite(userId, body);
  } else {
    status = await usersDao.deleteFavorite(userId, body);
  }
  // const user = await usersDao.findUserById(userId);
  // req.session["currentUser"] = user;
  res.json(status);
}

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  const status = await usersDao.updateUser(userId, updates);
  const user = await usersDao.findUserById(userId);
  req.session["currentUser"] = user;
  res.json(status);
}

const deleteUser = async (req, res) => {
  const userId = req.params['uid'];
  const status = await usersDao.deleteUser(userId);
  res.sendStatus(status);
}

const createUser = async (req, res) => {
  const newUser = await usersDao.createUser(req.body);
  res.json(newUser);
}

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersDao.findUserById(userId);
  res.json(user);
}

const findUsers = async (req, res) => {
  const users = await usersDao.findAllUsers();
  res.json(users);
}

const updateAnyUser = async (req, res) => {
  const UID = req.body.user;
  const updates = req.body.updates;
  const userFound = usersDao.findUserById(UID);
  console.log("USER FOUND = ", userFound);
  if (userFound) {
    const status = await usersDao.updateUser(UID, updates);
    const updatedUser = await usersDao.findUserById(UID);
    res.json(updatedUser);
  } else {
    console.log("NO such user found");
    res.status(404);
  }
}

export default UserController;

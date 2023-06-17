import * as usersDao from "./users-dao.js";

const UserController = (app) => {
   app.get('/api/users', findUsers);
   app.get('/api/users/:uid', findUserById);
   app.post('/api/users', createUser);
   app.delete('/api/users/:uid', deleteUser);
   app.put('/api/users/:uid', updateUser);
}

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  const status = await usersDao
                     .updateUser(userId, updates);
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

export default UserController;
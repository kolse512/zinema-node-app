import * as usersDao from "./users-dao.js";

const UserController = (app) => {
   app.get('/api/users', findUsers);
   app.get('/api/users/:uid', findUserById);
   app.post('/api/users', createUser);
   app.delete('/api/users/:uid', deleteUser);
   app.put('/api/users/:uid', updateUser);
  //  app.get('api/users/firstname/:firstname', findUserByFirstName);
  //  app.get('api/users/lastname/:lastname', findUserByLastName);
   app.get('api/users/username/:username', findUserByUsername);
   app.post('api/users/followinglist', followinglist);
}


const followinglist = async(req,res) => {
  console.log("Inside followingList");
  const userIdList = req.body.followingList;
  const result = [];
  userIdList.map(async (u) => {
    const user = await usersDao.findUserById(u);
    console.log("Inside followingLsit controller");
    console.log("user = ", user);
    result.push(user);
  })
  console.log("Result = ", result);
  res.json(result);
};

const findUserByUsername = async(req,res) => {
  const username = req.params.username;
  const user = await usersDao.findUserByUsername(username);
  res.json(user);
};

// const findUserByFirstName = async(req,res) => {
//   const firstname = req.params.firstname;
//   const user = await usersDao.findUserByFirstName(firstname);
//   res.json(user);
// };

// const findUserByLastName = async(req,res) => {
//   const lastname = req.params.lastname;
//   const user = await usersDao.findUserByLastName(lastname);
//   res.json(user);
// };

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  const status = await usersDao
                     .updateUser(userId, updates);
  const user = await usersDao.findUserById(userId);
  req.session["currentUser"] = user;
  res.json(status);
};
      
const deleteUser = async (req, res) => {
    const userId = req.params['uid'];
    const status = await usersDao.deleteUser(userId);
    res.sendStatus(status);
};
    
const createUser = async (req, res) => {
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser);
};
  
const findUserById = async (req, res) => {
    console.log("Inside user controller");
    const userId = req.params.uid;
    console.log("UId = ",userId);
    const user = await usersDao.findUserById(userId);
    console.log("User = ",user);
    res.json(user);
};
  
const findUsers = async (req, res) => {
   const users = await usersDao.findAllUsers();
   res.json(users);
};

export default UserController;
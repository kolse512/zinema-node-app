import * as usersDao from "./billing-dao.js";

const BillingController = (app) => {
   app.get('/api/billing', findUsers);
   app.get('/api/billing/:uid', findUserById);
   app.post('/api/billing', createUser);
   app.delete('/api/billing/:uid', deleteUser);
   app.put('/api/billing/:uid', updateUser);
}

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  const status = await billingDao
                     .updateUser(userId, updates);
  const user = await usersDao.findUserById(userId);
  req.session["currentUser"] = user;
  res.json(status);
  }
      
const deleteUser = async (req, res) => {
    const userId = req.params['uid'];
    const status = await billingDao.deleteUser(userId);
    res.sendStatus(status);
  }
    
const createUser = async (req, res) => {
    const newUser = await billingDao.createUser(req.body);
    res.json(newUser);
  }
  
const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await billingDao.findUserById(userId);
    res.json(user);
  }
  
const findUsers = async (req, res) => {
   const users = await billingDao.findAllUsers();
   res.json(users);
}

export default BillingController;

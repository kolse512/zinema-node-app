import * as billingDao from "./billing-dao.js";

const BillingController = (app) => {
   app.get('/api/billing', findUsers);
   app.get('/api/billing/:uid', findUserById);
   app.post('/api/billing', createUser);
   app.delete('/api/billing/:uid', deleteUser);
   app.put('/api/billing/:uid', updateUser);
   app.post('/api/billing/cards', findCardsByIds);
}

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  const status = await billingDao
                     .updateBilling(userId, updates);
  const user = await billingDao.findBillingById(userId);
  req.session["currentUser"] = user;
  res.json(status);
  }
      
const deleteUser = async (req, res) => {
    const userId = req.params['uid'];
    const status = await billingDao.deleteBilling(userId);
    res.sendStatus(status);
  }
    
const createUser = async (req, res) => {
    const { ['_id']: _id, ...reqWithoutProfileId } = req.body 
    const newUser = await billingDao.createBilling(reqWithoutProfileId);
    res.json(newUser);
  }
  
const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await billingDao.findBillingById(userId);
    res.json(user);
  }
  
const findUsers = async (req, res) => {
   const users = await billingDao.findAllBilling();
   res.json(users);
}

const findCardsByIds = async (req, res) => {
  const cardIds = req.body.cardIds; // Assuming card IDs are sent in the request body
  const cards = await billingDao.findCardsByIds(cardIds);
  res.json(cards);
};

export default BillingController;

import mongoose from 'mongoose';
const billingSchema = mongoose.Schema({
  cardNumber: Number,
  cvv: Number,
  expiry: String,
}, {collection: 'billing'});
export default billingSchema;

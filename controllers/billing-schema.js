import mongoose from 'mongoose';
const billingSchema = mongoose.Schema({
  name: String,
  userType: {
    type: String,
    enum: ['BASIC', 'PREMIUM', 'ADMIN']
  },
  billingDate: Date,
  cardDetails: String,
  lastPaymentDate: Date
}, {collection: 'billing'});
export default billingSchema;
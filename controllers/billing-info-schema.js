import mongoose from 'mongoose';
const billingInfoSchema = mongoose.Schema({
  monthlyPlan: Number,
  userType: String,
  // userType: {
  //   type: String,
  //   enum: ['BASIC', 'PREMIUM', 'ADMIN']
  // },
  yearlyPlan: Number
}, {collection: 'billingInfo'});
export default billingInfoSchema;
import mongoose from "mongoose";
import billingSchema from "./billing-schema.js";
const billingModel = mongoose.model('BillingModel', billingSchema);
export default billingModel;
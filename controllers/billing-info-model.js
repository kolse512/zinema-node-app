import mongoose from "mongoose";
import billingInfoSchema from "./billing-info-schema.js";
const billingInfoModel = mongoose.model('BillingInfoModel', billingInfoSchema);
export default billingInfoModel;
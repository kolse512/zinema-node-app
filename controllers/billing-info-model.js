import mongoose from "mongoose";
import billingInfoSchema from "./billing-info-schema";
const billingInfoModel = mongoose.model('BillingInfoModel', billingInfoSchema);
export default billingInfoModel;
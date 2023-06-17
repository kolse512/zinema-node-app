import billingInfoModel from "./billing-info-model.js";
export const findBillingInfoById = (bid) => billingInfoModel.findById(bid);
export const createBillingInfo = (billing) => billingInfoModel.create(billing);
export const deleteBillingInfo = (bid) => billingInfoModel.deleteOne({_id: bid});
export const updateBillingInfo = (bid, billing) => billingInfoModel.updateOne({_id: bid}, {$set: billing});
export const findBillingInfoByUserType = (userType) => billingInfoModel.findOne( {userType} );
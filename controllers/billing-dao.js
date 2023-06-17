import billingModel from "./billing-model";
export const findBillingById = (bid) => billingModel.findById(bid);
export const createBilling = (billing) => billingModel.create(billing);
export const deleteBilling = (bid) => billingModel.deleteOne({_id: bid});
export const updateBilling = (bid, billing) => billingModel.updateOne({_id: bid}, {$set: billing});
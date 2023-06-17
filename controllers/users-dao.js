import userModel from "./user-model";
export const findUserById = (uid) => userModel.findById(uid);
export const findUserByUsername = (username) => userModel.findOne({ username });
export const createUser = (user) => userModel.create(user);
export const deleteUser = (uid) => userModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => userModel.updateOne({_id: uid}, {$set: user});
export const findUserByCredentials = (username, password) => userModel.findOne({ username, password });
export const findAllUsers = () => userModel.find({});
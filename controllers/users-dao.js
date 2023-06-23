import userModel from './user-model.js';
export const findUserById = (uid) => userModel.findById(uid);
export const findUserByUsername = (username) => userModel.findOne({ username });
export const createUser = (user) => userModel.create(user);
export const deleteUser = (uid) => userModel.deleteOne({ _id: uid });
export const updateUser = (uid, user) => userModel.updateOne({ _id: uid }, { $set: user });
export const findUserByCredentials = (username, password) => userModel.findOne({ username, password });
export const findAllUsers = () => userModel.find({});

// favoriting functionality
// export const addFavorite = (uid, mid) => userModel.updateOne({ _id: uid }, { $push: mid })
// export const deleteFavorite = (uid, mid) => userModel.updateOne({ _id: uid }, { $pull: mid })

// temp favorite functionality for backend testing
export const addFavorite = (uid, mid) => userModel.updateOne({ username: uid }, { $push: { favorites: mid } });
export const deleteFavorite = (uid, mid) => userModel.updateOne({ username: uid }, { $pull: { favorites: mid } });

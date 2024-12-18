import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },

  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

//3 parameters (customName,schemaName,collectionName)
let userModel = mongoose.model("Users", userSchema, "Users");

export default userModel;

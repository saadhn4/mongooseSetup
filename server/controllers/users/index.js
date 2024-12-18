import express from "express";
import userModel from "../../models/Users/Users.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/getallusers", (req, res) => {
  try {
    console.log("Get all users");
    res.status(200).json({ msg: "Get all users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);
    await userModel.create(userInput);
    res.status(200).json({ msg: "User Data Registered! 💻" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;

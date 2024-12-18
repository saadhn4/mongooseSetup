import express from "express";

const router = express.Router();

router.get("/getalladmins", (req, res) => {
  try {
    console.log("Get all admins");
    res.status(200).json({ msg: "Get all admins" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/register", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);
    res.status(200).json(userInput);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;

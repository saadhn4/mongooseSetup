import express from "express";

const router = express.Router();

router.get("/getallstaff", (req, res) => {
  try {
    console.log("Get all staff");
    res.status(200).json({ msg: "Get all staff" });
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

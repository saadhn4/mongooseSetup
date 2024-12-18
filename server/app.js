import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import adminsRouter from "./controllers/admins/index.js";
import usersRouter from "./controllers/users/index.js";
import staffRouter from "./controllers/staff/index.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello World" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.use("/api/admins", adminsRouter);
app.use("/api/users", usersRouter);
app.use("/api/staff", staffRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

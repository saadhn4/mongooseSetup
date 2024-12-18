import express from "express";
import config from "config";

const app = express();
const PORT = config.get("PORT");
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ success: "Hello World!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

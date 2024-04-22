import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const url = "http://127.0.0.1:5000/hi";
  axios.get(url).then((resp) => {
    console.log(resp.data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

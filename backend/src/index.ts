import express from "express";
import mongoose from "mongoose";
import routes from "../src/routes/survey";
import cors from "cors";

const url = "mongdb url";

mongoose.connect(url);

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "*",
    methods: "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

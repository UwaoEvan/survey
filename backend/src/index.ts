import express from "express";
import mongoose from "mongoose";
import routes from "../src/routes/survey";

mongoose.connect("");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

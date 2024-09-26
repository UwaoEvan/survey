import express, { NextFunction, Request } from "express";
import mongoose from "mongoose";
import routes from "../src/routes/survey";

mongoose.connect("mongodb+srv://evan:Mwambisi254@cluster0.gpmge.mongodb.net/");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

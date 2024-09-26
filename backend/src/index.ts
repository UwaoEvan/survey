import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world")
})

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})
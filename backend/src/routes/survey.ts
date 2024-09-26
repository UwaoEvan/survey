import { Router, Request, Response } from "express";
import { Survey } from "../models";
import { randomUUID } from "crypto";

const router = Router();


router.get("/", async (_, res: Response) => {
  const survey = await Survey.findOne({});
  res.send(survey);
})

router.post("/", async (request: Request, res: Response) => {
  const {} = request.body;
  try {
    const survey = await Survey.create({
      id: randomUUID(),
      title: "Survey title"
    })
    res.status(201).send(survey);
  } catch (error) {
    console.log(error);
  }
})

router.put("/:id", async (response: Response, request: Request) => {
  const { id }= request.params;
  try {
    const record = await Survey.findById(id)
    if (!record) {
      response.status(404).json({ 
        message: "Record not found"
      })
    }
  } catch (error) {
    
  }
})

router.delete("/:id", async (request: Request, response: Response) => {
  const { id }= request.params;
  try {
    const record = await Survey.deleteOne({ id: id });

    if (!record){
      response.status(404).json({
        message: "Record not found."
      });
    }
  } catch (error) {
    
  }
})

export default router;
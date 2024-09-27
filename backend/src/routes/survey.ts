import { Router, Request, Response, NextFunction } from "express";
import { Survey } from "../models";

const router = Router();

router.get("/", async (_, res: Response) => {
  const survey = await Survey.find();
  if (!survey) {
    res.status(404).json({
      message: "No survey found. Begin by creating one.",
    });
  }
  res.send(survey);
});

router.post(
  "/",
  async (request: Request, res: Response, next: NextFunction) => {
    const { title, survey } = request.body;

    try {
      const newSurvey = await Survey.create({
        title,
        survey,
      });

      res.send(newSurvey);
    } catch (error) {
      next(error);
    }
  },
);

router.get("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const survey = await Survey.findById(id);

  if (!survey) {
    response.status(404).json({
      message: "Record not found",
    });
  }
  response.send(survey);
});

router.put(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    const body = request.body;

    try {
      const record = await Survey.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      if (!record) {
        response.status(404).json({
          message: "Record not found",
        });
      }

      response.send(record);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    try {
      const record = await Survey.findByIdAndDelete(id);
      if (!record) {
        response.status(404).json({
          message: "Record not found.",
        });
      }

      response.json({
        message: "Record deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  },
);

router.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({
    message: "Oops!! Something went wrong",
    error: err.message,
  });
});

export default router;

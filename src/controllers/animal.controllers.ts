import { Request, Response } from "express";

export const getAnimals = (req: Request, res: Response) => {
  res.status(200).json({
    message: "se obtuvo el animal"
  })
}

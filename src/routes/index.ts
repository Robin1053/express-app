import { Router, Request, Response } from "express";

export const IndexRouter = Router();

IndexRouter.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Homepage",
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
  });
});

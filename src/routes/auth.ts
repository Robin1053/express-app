// src/routes/auth.ts
import { Router, Request, Response } from "express";

export const authRouter = Router();

authRouter.get("/signin", (req: Request, res: Response) => {
  res.render("auth/signin", {
    title: "Login",
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
  });
});

authRouter.get("/signup", (req: Request, res: Response) => {
  res.render("auth/signup", {
    title: "Register",
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
  });
});

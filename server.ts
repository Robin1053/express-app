// server.ts
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/lib/auth"; // Beachten Sie, dass ich den doppelten Schrägstrich entfernt habe
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import { authRouter } from "./src/routes/auth";
import { IndexRouter } from "./src/routes/index";

const PORT = process.env.Port || 3000;
const app = express();
dotenv.config();

app.use(express.json());
//static files
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

// Konfiguriert die EJS View Engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Verwendet die Layout-Middleware
app.use(expressLayouts as any);

// Setzt den Standard-Layout-Pfad
app.set("layout", "layouts/Main");

// Korrigierte Route für better-auth:
app.all("/api/auth/{*any}", toNodeHandler(auth));

//Auth Routes
app.use("/auth", authRouter);

// Index Route
app.use("/", IndexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

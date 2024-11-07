import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use the environment variable for the port, default to 3000 if not provided
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/hello/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import classifyRouter from "./routes/classifyRouter"
import AppError from './helpers/AppError';
import errorHandler from './middlewares/errorHandler';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Express!');
  });

app.use(express.json());
app.use(cors());

// ✅ Example API Route (Only GET Allowed)
app.use("/api/v1", classifyRouter);


// ❌ Force an error for testing
app.get("/api/v1/error", (req, res, next) => {
    next(new AppError("This is a test error!", 500))
});

// ✅ 404 - Not Found Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// ✅ Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/v1`);
});
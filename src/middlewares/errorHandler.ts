import { Request, Response, NextFunction } from "express";

interface ErrorResponse {
    status: number;
    message: string;
    stack?: string;
}

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err.message);

    const statusCode = err.status || 500;
    const response: ErrorResponse = {
        status: statusCode,
        message: err.message || "Internal Server Error",
    };

    // ✅ Include stack trace only in development mode
    if (process.env.NODE_ENV === "development" && err.stack){
        response.stack = err.stack;
    }

    res.status(statusCode).json(response);
}

export default errorHandler;
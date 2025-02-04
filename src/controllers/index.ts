import { Request, Response } from "express";
import { classifyNumber } from "../helpers/classifyNumber";

export const classifyNumberController = async (req: Request, res: Response) => {
    const { number } = req.query;
    const num = Number(number);

    if(isNaN(num)) {
        return res.status(404).json({ number: "alphabet", error: true})
    }

    try {
        const result = await classifyNumber(num)
        return res.json(result)
    } catch (error: any) {
        return res.status(500).json({ error: true, message: error.message });
    }
}
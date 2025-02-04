import axios from "axios";
import dotenv from "dotenv";
import { isPrime, isPerfect, isArmstrong } from "./index";

dotenv.config();

export const classifyNumber = async (num: number) => {
    const properties: string[] = [];
    if (isPrime(num)) properties.push("prime");
    if (isPerfect(num)) properties.push("perfect");
    if (isArmstrong(num)) properties.push("armstrong");
    if (num % 2 === 0) properties.push("even");
    else properties.push("odd");

    const digitSum = num < 0 
    ? -Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    : num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);


    let funFact = "";
    try {
        const response = await axios.get(`${process.env.API_URL}/${num}`);
        funFact = response.data;
    } catch (error) {
        funFact = "Could not fetch fun fact...";
    }

    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum,
        fun_fact: funFact,
    };

}
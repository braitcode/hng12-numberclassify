## Number Classification API 🚀
This is a Node.js API built with TypeScript and Express for classifying numbers based on various mathematical properties.

## Features of this API
1. Determines if a number is prime, perfect, Armstrong, even, or odd
2. It calculates the sum of the digits of the number
3. It fetches a fun fact about the number from the Numbers API
4. Typescript is used for type safety
5. It supports API versioning (/api/v1)
6. Implements error handling and validation

## Mathematical Concepts Behind the Classifications
# Prime Number
A prime number is a number greater than 1 that has exactly two divisors: 1 and itself. This means it cannot be divided evenly by any other number.

 - **Examples: 2, 3, 5, 7, 11, 13, ...**
 - **The function checks divisibility by iterating from 2 to sqrt(n), as factors appear in pairs.**

## Perfect Number
A perfect number is a number that is equal to the sum of its proper divisors (excluding itself).
 - **Examples: 6, 28, 496, 8128**
 - **For instance, 6 has divisors 1, 2, 3 → 1 + 2 + 3 = 6, so it's a perfect number.**

## Armstrong Number (Narcissistic Number)
An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

 - **Examples: 153, 370, 371, 407**

 - **For instance, 371: [ 3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371 ]**
 Since the sum equals the original number, 371 is an Armstrong number.

 Setup Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/number-classification-api.git
cd number-classification-api
```

### 2️ Install Dependencies
Using **Yarn**:
```bash
yarn install
```
or **npm**:
```bash
npm install
```

### 3️ Configure Environment Variables
Create a `.env` file in the root folder and add:
```ini
PORT=8080
```

### 4️ Run the API

#### **Development Mode**
```bash
yarn dev
```
or
```bash
npm run dev
```

#### **Production Mode**
```bash
yarn build && yarn start
```
or
```bash
npm run build && npm start
```

---

## How to use API

### **Base URL:**  
```
local: http://localhost:8080/api/v1/classify-number
```
```
production: https://olympic-guenna-blard-02d32c23.koyeb.app/api/v1/classify-number
```

### **Endpoints**
#### ➤ Classify a Number
**GET** `/api/v1/classify-number/:number`

##### **Example Request:**
```
GET http://localhost:8080/api/v1/classify-number/30
```
##### **Example Response:**
```json
{
   "number": 30,
   "is_prime": false,
   "is_perfect": false,
   "properties": [
   "even"
],
   "digit_sum": 3,
   "fun_fact": "30 is the consumption in pounds of candy annually per person in Denmark, the country with the highest candy consumption."
}
```

#### ➤ Error Handling
If an invalid number is provided, the API returns a **400 Bad Request**:
```json
{
   "number": "alphabet",
   "error": true,
}
```

## To contribute to this Repo

1. Fork this repository.
2. Clone your forked repo:
   ```bash
   git clone https://github.com/braitcode/hng12-numberclassify.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes and commit:
   ```bash
   git commit -m "Added new feature"
   ```
5. Push to your fork:
   ```bash
   git push origin feature-name
   ```
6. Create a **Pull Request**.

---

## License
This project is licensed under the **MIT License**.

---

## Backlink
Node.js: https://hng.tech/hire/nodejs-developers

- **Coded by © BraitCode**
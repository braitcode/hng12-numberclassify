import express from 'express';
import methodNotAllowed from '../middlewares/methodNotAllowed';
import { classifyNumberController } from '../controllers/index';

const router = express.Router();

router.get('/classify-number', async (req, res, next) => {
    try {
        await classifyNumberController(req, res);
    } catch (error) {
        next(error);
    }
});

router.all('/classify-number', methodNotAllowed)

export default router;
import { Router } from "express";
import QuoteController from "../controller/QuoteController.js";

const router = Router();

// POST : To send Quote data and download it as image
router.post('/generate', QuoteController.generateImage)


router.get('/home', (req,res)=>{
    res.send('hello there')
})

export default router;
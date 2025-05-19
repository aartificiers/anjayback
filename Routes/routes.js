import express  from "express";
import { bookslots, getAllSlots } from "../Controller/slots.js";
// import { subUserReg } from '../Controller/subUser.js';

const router=express.Router();



// Sub User Api Routes
router.post("/bookslots",bookslots );
router.get('/slots/get',getAllSlots);




export default router;

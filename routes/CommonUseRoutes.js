import express from "express";
import {
    createWaitlist, getWaitlist
} from '../controller/common/index.js';

const router = express.Router();


// Route to create a new navbar
router.route("/waitlist")
    .post(createWaitlist)
    .get(getWaitlist);



export default router;

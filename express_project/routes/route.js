import express from "express";
import {dashRouting,getData,postData} from "../controllers/controller.js"

//router object
const router = express.Router();

//routing
//Dash media player || GET
router.get('/dash',dashRouting);

//All Stats || GET
router.get('/data',getData);

//Set Data || POST
router.post('/data', postData);

//Set state || POST

export default router
import express from "express";
import {dashRouting,getData,getDeviceData,getState,postData, postDeviceData, setDevice} from "../controllers/controller.js"

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
router.post('/setstate', setDevice );

//get status || GET
router.get('/getstate/:resource', getState);

//post data || POST
router.post('/setdata', postDeviceData);

//get data || GET
router.get('/getdata', getDeviceData);
export default router
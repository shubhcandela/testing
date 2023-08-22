// import data from "../data.js";
import path from "path"
let deviceData = {
    
}
let data = {}
let i = 0
export const dashRouting = (req,res)=>{
    let absPath = path.resolve("dash.html");

    return res.sendFile(absPath)
};

export const getData = (req,res) => {
    return res.status(200).send({
      data
    })
};

export const postData = (req,res) =>{
    let datatoadd = req.body
    console.log(datatoadd)
    data = datatoadd
    res.send(data)
}

export const setDevice = (req,res) =>{
    const {resource,state} = req.body
    if(deviceData[resource] != undefined){
        deviceData[resource]["state"] = state
    }else{
        deviceData[resource] ={
            "state":state,
            "stats":[]
        }
    }
    console.log(deviceData)
    res.send(deviceData)
}

export const getState = (req,res) =>{
    try{
        console.log(req.params.resource)
    const key = req.params.resource
    if(deviceData[key] != undefined){
        console.log(deviceData[key])
        res.send(deviceData[key]["state"]);
    }else{
        console.log(key+Object.keys(deviceData))

        res.send("NA");
    }}
    catch{
        console.log("errorrrrr")
        res.send("error occured")
    }
}

export const postDeviceData = (req,res)=>{
    const {resource,data} = req.body
    if(deviceData[resource] != undefined){
        deviceData[resource]["stats"].push(data)
        res.send("data posted")
    }else{
        res.send("NO Resorce Is Present")
    }
}

export const getDeviceData = (req,res)=>{
    res.send(deviceData)
}

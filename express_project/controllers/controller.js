// import data from "../data.js";
import path from "path"
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

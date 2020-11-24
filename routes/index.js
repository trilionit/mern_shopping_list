const express= require("express");
const router= express.Router();

router.get("/", (req, res)=>{
    res.send('index route reached...')
    console.log("index route reached...");
})

module.exports = router;
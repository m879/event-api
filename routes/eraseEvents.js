var express = require('express');
var router = express.Router();
const Events=require('../models/Event');

// Route to delete all events

router.delete('',async(req,res)=>{
  
    console.log("Deleteing all");
    try{
        await Events.deleteMany({});
        res.status(200).json({"message":"Deleted Successfully"});  
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

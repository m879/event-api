var express = require('express');
var router = express.Router();
const Events=require('../models/Event');

// ADD EVENTS
router.post('',async (req,res)=>{
    const newdata=new Events(req.body);
    try{
        const saveddata=await newdata.save();
        res.status(201).json(saveddata);
     }catch(err){
         res.status(400).send(err);
         console.log(err);
     }
});

//GET ALL EVENTS
router.get('',async(req,res)=>{
    try{
        posts = await Events.find().sort({_id:1});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

// EVENT RECORD BY REPO ID
router.get('/repos/:id',async(req,res)=>{
    const repoid=req.params.id;
    try{
        posts = await Events.find({'repo._id':repoid});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
});


// EVENT RECORD BY ACTOR ID
router.get('/actors/:id',async(req,res)=>{
    const actorid=req.params.id;
    try{
        posts = await Events.find({'actor._id':actorid});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
});


// EVENT RECORD BY ACTOR ID
router.get('/repos/:repoID/actors/:actorID',async(req,res)=>{
    const actorid=req.params.actorID;
    const repoid=req.params.repoID;
    try{
        posts = await Events.find({'actor._id':actorid,'repo._id':repoid}).sort({_id:1});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
});

module.exports = router;
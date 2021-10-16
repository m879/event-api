const mongoose=require("mongoose");

const Events=new mongoose.Schema({
   type:{
       type:String,
       required: true
    },
    actor:[
        {
           
            login: { 
                type: String, 
                required: true
            },
            avatar_url:{
                type: String, 
                required: true
            },
        }
    ]
    ,
    repo:[
        {
            name:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Events',Events);


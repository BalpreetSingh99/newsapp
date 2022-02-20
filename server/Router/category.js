const express = require("express");
const router = express.Router();
const { Category } = require('../Models');


router.get('/',async function(req,res){
    console.log('inside get category')
    let a;
    a=await Category.find()
    // console.log(a.headline)
    res.send(a)
});


module.exports = router;
const express = require("express");
const router = express.Router();
const { Author } = require('../Models');


router.get('/',async function(req,res){
    console.log('inside get author')
    let a;
    a=await Author.find()
    // console.log(a.headline)
    res.send(a)
});


module.exports = router;
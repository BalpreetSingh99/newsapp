const express = require("express");
const router = express.Router();
const { Item } = require('../Models');


router.get('/',async function(req,res){
    console.log('in get feed')
    let a;
    a=await Item.find().populate('author').populate('category')
    // console.log(a.headline)
    res.send(a)

});

router.post('/filter',async function(req,res){
    console.log('in get feed filter')
    console.log(req.body);
    let a;
    console.log(req.body.obj.category)
    console.log(req.body.obj.author)
    let selectedCategory=req.body.obj.category
    let selectedAuthor=req.body.obj.author
    // a=await Item.find().populate('author').populate('category')
    if(selectedCategory==="" && selectedAuthor===""){
        console.log('1')
        a=await Item.find().populate('author').populate('category') 
    }
    else if(selectedCategory==="" && selectedAuthor!==""){
        console.log('2')
        a=await Item.find().populate({path: 'author',
    match: { author: { $eq: selectedAuthor } }}).populate('category')
    }
    else if(selectedCategory!=="" && selectedAuthor===""){
        console.log('3')
        a=await Item.find().populate({path: 'category',
    match: { category: { $eq: selectedCategory } }}).populate('author')
    }
    else{
        a=await Item.find().populate({path: 'author',
    match: { author: { $eq: selectedAuthor } }}).populate({path: 'category',
    match: { category: { $eq: selectedCategory } }})
    }
    console.log(a)
    if(a.length!==0){
    a=a.filter((e)=>{
        return e.author!==null && e.category!==null
    })
    }
    res.send(a)
});


module.exports = router;
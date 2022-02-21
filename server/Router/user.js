const express = require("express");
const router = express.Router();
const { User } = require('../Models');


router.post('/',async function(req,res){
    console.log('in post user')
    console.log(req.body)
    let a;
    let obj;
    a=await User.findOne({username:req.body.userData.username});
    if(a===null){
        var user1 = new User({ 
            username: req.body.userData.username,
            email: req.body.userData.email, 
            password: req.body.userData.password,
            phoneNumber: req.body.userData.phoneNumber,
            dob: req.body.userData.dob,
            tob: req.body.userData.tob,
            gender: req.body.userData.gender,
            maritalStatus: req.body.userData.maritalStatus,
            language: req.body.userData.language,
            profilePicture: req.body.userData.profilePicture,
        });
        await user1.save();
        res.send("User Added Successfully")
    }
    else{
        let obj={}
        req.body.userData.username!==""?obj.username=req.body.userData.username:
        req.body.userData.email!==""?obj.email=req.body.userData.email:
        req.body.userData.password!==""?obj.password=req.body.userData.password:
        req.body.userData.phoneNumber!==""?obj.phoneNumber=req.body.userData.phoneNumber:
        req.body.userData.dob!==""?obj.dob=req.body.userData.dob:
        req.body.userData.tob!==""?obj.tob=req.body.userData.tob:
        req.body.userData.gender!==""?obj.gender=req.body.userData.gender:
        req.body.userData.maritalStatus!==""?obj.maritalStatus=req.body.userData.maritalStatus:
        req.body.userData.language!==""?obj.language=req.body.userData.language:
        req.body.userData.profilePicture!==""?obj.profilePicture=req.body.userData.profilePicture:
        User.findOneAndUpdate(a,obj)
        res.send("User Updated Successfully")  
}
    // res.send(a)

});


module.exports = router;
var express = require('express');
var router = express.Router();
const User = require("../models/userModel");

router.post("/registerUser", async function (req, res) {
    try {
        const { email, fname, lname, fullname } = req.body;
		const user = await new User({email:email, fname:fname, lname:lname, fullname:fullname}).save();
    } catch (err) {
		console.log(err)
        return res.status(420).json({ msg: err.message })
    }
});
router.get('/getUser', async function (req, res){
    try{
        console.log(req.query)
        const {userEmail} = req.query
        const user = await User.findOne({email:userEmail})
        return res.json({user:user})
    }
    catch(err){
        console.log(err)
        return res.status(420).json({ msg: err.message })
    }
})
module.exports = router;

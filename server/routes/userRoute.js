const express = require('express')

const User = require('../models/userSchema')

const router = express.Router();


router.get('/createadmin', async (req, res) => {
    try {
      const user = new User({ 
        fullname: 'Ranoua',
        email: 'ranoua23@gmail.com',
        password: '1234',
        isAdmin: true,
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
  });


router.post('/signin', async(req,res)=>{
    const signinUser = await user.findOne({
        email: req.body.email,
        password: req.body.password
    }) 
    if(signinUser){
        res.send({
            _id:signinUser.id,
            fullname:signinUser.fullname,
            email:signinUser.email,
            
            token: getToken(signinUser)
        })
    }else {
        res.status(401).send({msg:'invalid email or password'})
    } 
})

module.exports = router;
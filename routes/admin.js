const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next)=>{

  res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"); // Allows us to send a response
});

router.post('/add-product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
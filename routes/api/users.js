const express = require('express');
const User = require('../../models/user');
const catchErrors = require('../../lib/async-error');
const router = express.Router();

//current user info get api

router.get('/me', function(req, res, next) {
  //here it is
  var user = req.user;

  //you probably also want to pass this to your view
  res.json({user: user });
});
module.exports = router;
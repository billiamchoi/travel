const express = require('express');
const Traveling = require('../models/traveling');
const router = express.Router();
const catchErrors = require('../lib/async-error');

function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('danger', 'Please signin first.');
    res.redirect('/signin');
  }
}


/* GET users listing. */
router.get('/', needAuth, catchErrors(async (req, res, next) => {
  // const travelings = await Traveling.find({});
  // var cur_user = req.user;
   
  res.render('reservation/index', {});
}));







module.exports = router;

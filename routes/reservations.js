const express = require('express');
const Reservation = require('../models/reservation');
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
  const my_reservations = await Reservation.find({author: req.user._id});
  const reservations = await Reservation.find({});
  var cur_user = req.user;
  
  res.render('reservations/index', {my_reservations: my_reservations, current: cur_user, reservations: reservations});
}));

router.post('/', needAuth, catchErrors(async (req, res, next) => {
  const user = req.user;
  var reservation = new Reservation({
    traveling: req.body.traveling,
    name: req.body.name,
    date: req.body.date,
    number_of_people: req.body.number_of_people,
    total: req.body.total,
    author: user._id

  });
  await reservation.save();
  req.flash('success', 'Successfully booked');
  res.redirect('/reservations');
}));







module.exports = router;

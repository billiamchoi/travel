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
  const travelings = await Traveling.find({});
  var cur_user = req.user;
   
  res.render('travelings/index', {travelings: travelings, current: cur_user});
}));

router.get('/new', (req, res, next) => {
  res.render('travelings/new', {messages: req.flash()});
});

router.post('/', needAuth, catchErrors(async (req, res, next) => {
  const user = req.user;
  var traveling = new Traveling({
    name: req.body.name,
    location: req.body.location,
    price: req.body.price,
    description: req.body.description,
    course: req.body.course,
    author: user._id,
    guide: user.name
  });
  await traveling.save();
  req.flash('success', 'Successfully posted');
  res.redirect('/travelings');
}));

router.get('/:id', catchErrors(async (req, res, next) => {
  const traveling = await Traveling.findById(req.params.id);
  res.render('travelings/show', {traveling: traveling});
}));

router.delete('/:id', needAuth, catchErrors(async (req, res, next) => {
  const traveling = await Traveling.findOneAndRemove({_id: req.params.id});
  req.flash('success', 'Deleted Successfully.');
  res.redirect('/travelings');
}));

router.get('/:id/edit', needAuth, catchErrors(async (req, res, next) => {
  const traveling = await Traveling.findById(req.params.id);
  res.render('travelings/edit', {traveling: traveling});
}));

router.put('/:id', needAuth, catchErrors(async (req, res, next) => {
  
  const traveling = await Traveling.findById({_id: req.params.id});
  if (!traveling) {
    req.flash('danger', 'Not exist traveling.');
    return res.redirect('back');
  }

  traveling.name = req.body.name;
  traveling.location = req.body.location;
  traveling.price = req.body.price;
  traveling.description = req.body.description;
  traveling.course = req.body.course;


  await traveling.save();
  req.flash('success', 'Updated successfully.');
  res.redirect('/travelings');
}));





module.exports = router;

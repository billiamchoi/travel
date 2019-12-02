const express = require('express');
const Question = require('../../models/question');
const catchErrors = require('../../lib/async-error');

const router = express.Router();

// Index
router.get('/', catchErrors(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const questions = await Question.paginate({}, {
    sort: {createdAt: -1}, 
    populate: 'author',
    page: page, limit: limit
  });
  res.json({questions: questions.docs, page: questions.page, pages: questions.pages});   
}));

// Read
router.get('/:id', catchErrors(async (req, res, next) => {
  const question = await Question.findById(req.params.id).populate('author');
  res.json(question);
}));

// Create
router.post('', catchErrors(async (req, res, next) => {
  var question = new Question({
    title: req.body.title,
    content: req.body.content,
    reg_date: req.body.reg_date,
    name: req.body.name,
    author: req.user._id,
  });
  await question.save();
  res.json(question)
}));

// Put
router.put('/:id', catchErrors(async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return next({status: 404, msg: 'Not exist question'});
  }
  if (question.author && question.author._id != req.user._id) {
    return next({status: 403, msg: 'Cannot update'});
  }
  question.title = req.body.title;
  question.host = req.body.host;
  question.subject = req.body.subject;
  question.deadline = req.body.deadline;
  question.manager = req.body.manager;
  question.ref = req.body.ref;
  question.field = req.body.field;
  question.phone = req.body.phone;
  question.content = req.body.content;
  question.tags = req.body.tags;
  await question.save();
  res.json(question);
}));

// Delete
router.delete('/:id', catchErrors(async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return next({status: 404, msg: 'Not exist question'});
  }
  if (question.author && question.author._id != req.user._id) {
    return next({status: 403, msg: 'Cannot update'});
  }
  await Question.findOneAndRemove({_id: req.params.id});
  res.json({msg: 'deleted'});
}));


module.exports = router;
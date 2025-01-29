// API router to submit the form

const express = require('express');
const submitForm = require('../controllers/formController');
const formRouter = express.Router();

formRouter.post('/submit', submitForm);

module.exports = formRouter;
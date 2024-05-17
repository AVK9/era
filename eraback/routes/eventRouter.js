const express = require('express');
const validateBody = require('../helpers/validateBody');
const schemas = require('../models/userevent');
const ctrl = require('../controllers/userEventControllers');

const eventRouter = express.Router();

eventRouter.post(
  '/register',
  validateBody(schemas.registerEventSchema),
  ctrl.createEventSubscribe
);
// eventRouter.get('/register', ctrl.verifyEmail);

module.exports = eventRouter;

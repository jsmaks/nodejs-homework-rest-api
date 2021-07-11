/* eslint-disable object-curly-spacing */
/* eslint-disable semi */

const express = require('express');
const {contacts: ctrl} = require('../../controllers');
const router = express.Router();

router
  .get('/', ctrl.getList)
  .get('/:contactId', ctrl.getById)
  .post('/', express.json(), ctrl.addContact)
  .delete('/:contactId', ctrl.del)
  .put('/:contactId', ctrl.update);

module.exports = router;

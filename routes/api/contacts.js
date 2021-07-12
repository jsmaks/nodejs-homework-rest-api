/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
const {
  contactsUpdateSchema,
  contactsCreateSchema,
} = require('../../utils/validate/contacts');

const express = require('express');
const { contacts: ctrl } = require('../../controllers');
const router = express.Router();
// console.log(contactsCreateSchema)
router
  .get('/', ctrl.getList)
  .get('/:contactId', ctrl.getById)
  .post('/', express.json(), ctrl.add)
  .delete('/:contactId', ctrl.del)
  .put('/:contactId', express.json(), ctrl.update)
  .patch('/:contactId/favorite', express.json(), ctrl.favoriteContact);

module.exports = router;

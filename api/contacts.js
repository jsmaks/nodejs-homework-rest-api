const express = require('express');
const { contacts: ctrl } = require('../controllers');
const { useAuth , contactsValidate: validate} = require('../middlewares');

const router = express.Router();

router
  .get('/', useAuth, ctrl.getList)
  .get('/:contactId', useAuth, ctrl.getById)
  .post('/', useAuth, express.json(), validate.addContact, ctrl.add)
  .delete('/:contactId', useAuth, ctrl.del)
  .put('/:contactId', useAuth, express.json(), validate.updateContact, ctrl.update)
  .patch('/:contactId/favorite', useAuth,  express.json(), validate.favContact, ctrl.favoriteContact);

module.exports = router;

const { Contact } = require('../models');
const getList =  (id) => Contact.find({owner: id});
const getById = (contactId) => Contact.findById(contactId);

module.exports = {
    getList,
    getById,
}
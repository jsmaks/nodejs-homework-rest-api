const { updateContact } = require('../../model')
const contactsSchema = require('../../utils/validate/contacts')
const update = async (req, res, next) => {
  const { error } = contactsSchema.validate(req.body)
  const body = req.body
  const { contactId } = req.params
  try {
    const newContact = await updateContact(contactId, body)
    if (newContact === -1 || error) {
      res.json({
        status: 'error',
        code: 404,
        message: error.message || 'NotFound'
      })
      return
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: newContact
      }
    })
  } catch (error) {
    console.log(error)
  }
}
module.exports = update

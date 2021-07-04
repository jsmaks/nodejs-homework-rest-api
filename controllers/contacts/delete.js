const { delContact } = require('../../model')

const del = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await delContact(contactId)
    console.log('tytaa', contact)

    if (contact) {
      res.json({
        status: 'success',
        code: 200,
        message: 'deleted'

      })
    } else {
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'No Content'
      })
    }
  } catch (error) {
    next(error)
  }
}
module.exports = del

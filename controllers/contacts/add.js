/* eslint-disable no-unused-vars */

const { v4: id } = require('uuid')
const { add } = require('../../model')
const contactsSchema = require('../../utils/validate/contacts')

const addContact = async (req, res) => {
  const { error } = contactsSchema.validate(req.body)
  try {
    const newContact = await add(req.body)

    if (!newContact || error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: error.message
      })
      return
    }

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: newContact
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = addContact

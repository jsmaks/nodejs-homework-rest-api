/* eslint no-use-before-define: 0 */
const { v4: id } = require('uuid')
const fs = require('fs').promises
const path = require('path')

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(data)
}

const getContactById = async (contactId) => {
  const converId = Number(contactId)
  const data = await listContacts()
  return data.find((item) => item.id === converId)
}

const add = async (body) => {
  const contacts = await listContacts()

  const newContact = { ...body, id: id() }
  const result = [...contacts, newContact]

  try {
    fs.writeFile(contactsPath, `${JSON.stringify(result)}`, (err) => {
      throw err
    })
  } catch (error) {
    console.log(error)
  }

  return newContact
}

const delContact = async (contactId) => {
  const converId = Number(contactId)
  const contacts = await listContacts()

  const isContactPresentInDatabase = contacts.find(item => item.id === converId)
  if (!isContactPresentInDatabase) return

  const result = contacts.filter((item) => item.id !== converId)

  try {
    fs.writeFile(contactsPath, `${JSON.stringify(result)}`, (error) => {
      throw error
    })
  } catch (error) {
    console.log(error)
  }
  return result
}

const updateContact = async (contactId, body) => {
  const converId = Number(contactId)
  const contacts = await listContacts()
  const contactIndex = contacts.findIndex((contact) => contact.id === converId)
  if (contactIndex === -1) return contactIndex
  contacts[contactIndex] = { ...contacts[contactIndex], ...body }
  try {
    fs.writeFile(contactsPath, `${JSON.stringify(contacts)}`, (error) => {
      throw error
    })
  } catch (error) {
    console.log(error)
  }
  return contacts[contactIndex]
}

module.exports = {
  listContacts,
  getContactById,
  delContact,
  add,
  updateContact,
}

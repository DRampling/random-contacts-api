import request from 'request-promise'

import { Contact } from '../../../models/Contact'

/**
 * Returns all contacts.
 * * GET /contacts
 */
export const getContacts = async (): Promise<Contact[]> => {
  const url = `http://localhost:3001/contacts`
  const response = await request(url)
  return JSON.parse(response)
}

/**
 * Returns contact.
 * * GET /contacts/:contactID
 */
export const getContact = async (contactID: string): Promise<Contact> => {
  const url = `http://localhost:3001/contacts/${contactID}`
  const response = await request(url)
  return JSON.parse(response)
}

/**
 * Adds contact.
 * * POST /contacts
 */
export const postContact = async (contact: Contact): Promise<Contact> => {
  const options = {
    uri: `http://localhost:3001/contacts`,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: contact,
    json: true
  }
  const response = await request(options)
  return response
}

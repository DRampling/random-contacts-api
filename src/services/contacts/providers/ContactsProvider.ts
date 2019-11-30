import request from 'request-promise'

import { Contact } from '../../../models/Contact'

/**
 * Fetches contacts.
 * * GET /contacts
 */
export const getContacts = async (): Promise<Contact[]> => {
  const url = `http://localhost:3001/contacts`
  const response = await request(url)
  return JSON.parse(response)
}

/**
 * Fetches contact.
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

/**
 * Edits contact.
 * * PATCH /contacts/:contactID
 */
export const patchContact = async (contactID: string, changes: Partial<Contact>): Promise<Contact> => {
  const options = {
    uri: `http://localhost:3001/contacts/${contactID}`,
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: changes,
    json: true
  }
  const response = await request(options)
  return response
}

import request from 'request-promise'

import { Contact } from '../../../models/Contact'

/**
 * Returns all contacts.
 */
export const getContacts = async (): Promise<Contact[]> => {
  const url = `http://localhost:3001/contacts`
  const response = await request(url)
  return JSON.parse(response)
}

/**
 * Returns contact.
 */
export const getContact = async (contactID: string): Promise<Contact> => {
  const url = `http://localhost:3001/contacts/${contactID}`
  const response = await request(url)
  return JSON.parse(response)
}

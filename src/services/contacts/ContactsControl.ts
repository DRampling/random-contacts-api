import { Contact } from '../../models/Contact'
import { getContacts, getContact, postContact } from './providers/ContactsProvider'

export const retrieveContacts = async () => {
  return await getContacts()
}

export const retrieveContact = async (contactID: string) => {
  return await getContact(contactID)
}

export const createContact = async (contact: Contact) => {
  return await postContact(contact)
}

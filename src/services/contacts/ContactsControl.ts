import { Contact } from '../../models/Contact'
import { getContacts, getContact, postContact, patchContact, deleteContact } from './providers/ContactsProvider'

export const fetchContacts = async () => {
  return await getContacts()
}

export const fetchContact = async (contactID: string) => {
  return await getContact(contactID)
}

export const createContact = async (contact: Contact) => {
  return await postContact(contact)
}

export const editContact = async (contactID: string, changes: Partial<Contact>) => {
  return await patchContact(contactID, changes)
}

export const destroyContact = async (contactID: string) => {
  return await deleteContact(contactID)
}

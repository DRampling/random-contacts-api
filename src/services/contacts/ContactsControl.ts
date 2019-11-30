import { getContacts, getContact } from './providers/ContactsProvider'

export const getContactsByName = async () => {
  return await getContacts()
}

export const getContactByName = async (contactID: string) => {
  return await getContact(contactID)
}

import { getContacts } from './providers/ContactsProvider'

export const getContactsByName = async () => {
  return await getContacts()
}

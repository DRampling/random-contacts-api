import fs from 'fs'
import path from 'path'

import { Contact } from '../../../models/Contact.js'

/**
 * Returns all existing contacts.
 */
export const getContacts = async (): Promise<any[]> => {
  return new Promise(resolve => {
    const filepath = path.join(__dirname, '../../../utils/Contacts.json')
    fs.readFile(filepath, 'utf8', (error, data) => {
      const result: Contact[] = JSON.parse(data)
      resolve(result)
    })
  })
}

import fs from 'fs'
import path from 'path'
import { generateContacts } from './GenerateContacts'

/**
 * Create contact records and places them into a local json file.
 */
export const createDatabase = () => {
  return new Promise(resolve => {
    const target = 100
    const contacts = generateContacts(target)
    const data = JSON.stringify({ contacts })
    const filepath = path.join(__dirname, 'Contacts.json')
    fs.writeFile(filepath, data, error => {
      if (error) {
        console.log(error)
      } else {
        console.log('[Init] - Contacts created.')
      }
      resolve()
    })
  })
}

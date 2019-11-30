import fs from 'fs'
import path from 'path'
import { generateContacts } from './GenerateContacts'

const target = 100
const contacts = generateContacts(target)
const data = JSON.stringify({ contacts })
const filepath = path.join(__dirname, 'db.json')

/**
 * Create a json file of random contacts.
 */
fs.writeFile(filepath, data, error => {
  error ? console.log(error) : console.log('[API] - Contacts created.')
})

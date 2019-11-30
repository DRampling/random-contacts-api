import { Request, Response } from 'express'

import { getContactsByName, getContactByName } from './ContactsControl'

export default [
  {
    path: '/api/v1.0/contacts',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const contacts = await getContactsByName()
        res.status(200).send(contacts)
      }
    ]
  },
  {
    path: '/api/v1.0/contacts/:contactID',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const contactID: string = req.params.contactID
        const contact = await getContactByName(contactID)
        res.status(200).send(contact)
      }
    ]
  }
]

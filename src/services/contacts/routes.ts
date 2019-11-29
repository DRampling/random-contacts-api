import { Request, Response } from 'express'

import { getContactsByName } from './ContactsControl'

export default [
  {
    path: '/api/v1.0/contacts',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const contacts: any[] = await getContactsByName()
        res.status(200).send(contacts)
      }
    ]
  }
]

import { Request, Response } from 'express'

import { Contact } from '../../models/Contact'
import { fetchContacts, fetchContact, createContact, editContact } from './ContactsControl'

export default [
  {
    path: '/api/v1.0/contacts',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const contacts = await fetchContacts()
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
        const contact = await fetchContact(contactID)
        res.status(200).send(contact)
      }
    ]
  },
  {
    path: '/api/v1.0/contacts',
    method: 'post',
    handler: [
      async (req: Request, res: Response) => {
        const newContact: Contact = req.body
        const contact = await createContact(newContact)
        res.status(200).send(contact)
      }
    ]
  },
  {
    path: '/api/v1.0/contacts/:contactID',
    method: 'patch',
    handler: [
      async (req: Request, res: Response) => {
        const contactID: string = req.params.contactID
        const changes: Partial<Contact> = req.body
        const contact = await editContact(contactID, changes)
        res.status(200).send(contact)
      }
    ]
  }
]

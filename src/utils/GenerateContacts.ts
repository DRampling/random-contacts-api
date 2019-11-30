import faker from 'faker'

import { Contact } from '../models/Contact'

/**
 * Returns n random contacts.
 * @param target Number of desired random contacts.
 */
export const generateContacts = (target: number) => {
  return convertNumberToArray(target).map(() => {
    return createRandomContact()
  })
}

/**
 * Creates an array of length n, of indexed elements from 0 -> (n - 1).
 * @param target Number of items desired.
 */
const convertNumberToArray = (target: number) => {
  return [...Array(target).keys()]
}

/**
 * Returns a newly created random contact using faker.
 */
const createRandomContact = (): Contact => {
  return {
    id: faker.random.uuid(),
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    county: faker.address.county(),
    country: faker.address.country(),
    postcode: faker.address.zipCode()
  }
}

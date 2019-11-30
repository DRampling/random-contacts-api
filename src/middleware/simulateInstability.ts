import { Router } from 'express'
import cors from 'cors'
import parser from 'body-parser'
import compression from 'compression'

/**
 * Applies cors initialized by the set config.
 * @param router Express router.
 */
export const handleCors = (router: Router) => router.use(cors({ credentials: true, origin: true }))

/**
 * Apply body parse support.
 * @param router Express router.
 */
export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }))
  router.use(parser.json())
}

/**
 * Apply compression.
 * @param router Express router.
 */
export const handleCompression = (router: Router) => {
  router.use(compression())
}

/**
 * Simulates random server errors.
 * @param router Express router.
 */
export const simulateInstability = (router: Router) => {
  const percentageOfFailure = 30
  router.use((req, res, next) => {
    if (generateRandomInteger() <= percentageOfFailure) return res.status(500).send('Internal server error.')
    return next()
  })
}

/**
 * Generate a positive, random integer, up to 100.
 */
const generateRandomInteger = () => {
  return Math.floor(Math.random() * 100)
}

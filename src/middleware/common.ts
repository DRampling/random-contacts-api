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

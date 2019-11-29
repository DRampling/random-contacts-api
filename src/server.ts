import http from 'http'
import express from 'express'

import middleware from './middleware'
import errorHandlers from './middleware/errorHandlers'
import routes from './services'
import { applyMiddleware, applyRoutes } from './utils'
import { createDatabase } from './utils/GenerateDatabase'

const router = express()
const { PORT = 3000 } = process.env

/**
 * Handler for uncaught exceptions, the instance is killed.
 * * TODO: pm2 spawns a new instance
 */
process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

/**
 * Handler for uncaught rejections, the instance is killed.
 * * TODO: pm2 spawns a new instance
 */
process.on('unhandledRejection', error => {
  console.log(error)
  process.exit(1)
})

// Create Data ====================================================================================================== //

/**
 * Waits for data to be created.
 */
const setupDatabase = async () => {
  await createDatabase()
  console.log('[Init] - Data creation complete.')
  setupExpress()
}

// Setup Express ==================================================================================================== //

/**
 * Apply middleware, routes, error handlers then start server.
 */
const setupExpress = () => {
  applyMiddleware(middleware, router)
  applyRoutes(routes, router)
  applyMiddleware(errorHandlers, router)
  setupServer()
}

// Setup Server ===================================================================================================== //

/**
 * Start the http server on the set port.
 */
const setupServer = () => {
  const server = http.createServer(router)
  server.listen(PORT, () => console.log(`[Init] - Server is running http://localhost:${PORT}...`))
}

setupDatabase()

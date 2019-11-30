import http from 'http'
import express from 'express'

import middleware from './middleware'
import errorHandlers from './middleware/errorHandlers'
import routes from './services'
import { applyMiddleware, applyRoutes } from './utils'

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

// Setup Express ==================================================================================================== //

applyMiddleware(middleware, router)
applyRoutes(routes, router)
applyMiddleware(errorHandlers, router)

const server = http.createServer(router)
server.listen(PORT, () => console.log(`[API] - Server is running http://localhost:${PORT}...`))

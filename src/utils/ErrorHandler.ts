import { Response, NextFunction } from 'express'
import { HTTPClientError, HTTP404Error } from '../utils/httpErrors'

/**
 * Throw a client error in response if nothing else is found.
 */
export const notFoundError = () => {
  throw new HTTP404Error('Method not found.')
}

/**
 * Catch 4XX errors and pass the remainder to server error handler.
 * @param error Error.
 * @param res Express response.
 * @param next Express next function.
 */
export const clientError = (error: Error, res: Response, next: NextFunction) => {
  if (error instanceof HTTPClientError) {
    console.warn(error)
    res.status(error.statusCode).send(error.message)
  } else {
    next(error)
  }
}

/**
 * Call uncaughtException handler to end the node process.
 * @param error Error.
 * @param res Express response.
 * @param next Express next function.
 */
export const serverError = (error: Error, res: Response, next: NextFunction) => {
  console.error(error)
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('Internal Server Error')
  } else {
    res.status(500).send(error.stack)
  }
}

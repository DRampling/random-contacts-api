import { Request, Response, NextFunction, Router } from 'express'
import * as ErrorHandler from '../utils/ErrorHandler'

/**
 * Apply fallback middleware if required.
 * @param router Express router.
 */
const handle404Error = (router: Router) => {
  router.use(() => {
    ErrorHandler.notFoundError()
  })
}

/**
 * Catch client API errors.
 * @param router Express router.
 */
const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next)
  })
}

/**
 * Handler for internal server errors.
 * @param router Express router.
 */
const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next)
  })
}

export default [handle404Error, handleClientError, handleServerError]

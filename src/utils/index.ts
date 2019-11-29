import { Router, Request, Response, NextFunction } from 'express'

// Types ============================================================================================================ //

type Wrapper = (router: Router) => void

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

type Route = {
  path: string
  method: string
  handler: Handler | Handler[]
}

// Appliers ========================================================================================================= //

/**
 * Take a list of middleware and apply them to the router.
 * @param middlewareWrappers Middleware wrappers defined from middleware/index.ts and express.Router.
 * @param router Router from Express.
 */
export const applyMiddleware = (middlewareWrappers: Wrapper[], router: Router) => {
  middlewareWrappers.forEach(wrapper => {
    wrapper(router)
  })
}

/**
 * Add all routes to the express router instance.
 * @param routes Indexed routes.
 * @param router Router from Express.
 */
export const applyRoutes = (routes: Route[], router: Router) => {
  routes.forEach(route => {
    const { method, path, handler } = route
    ;(router as any)[method](path, handler)
  })
}

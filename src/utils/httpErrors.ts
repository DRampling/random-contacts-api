/**
 * HTTPClientError abstracted to format the message.
 */
export abstract class HTTPClientError extends Error {
  readonly statusCode!: number
  readonly name!: string

  constructor(message: object | string) {
    if (message instanceof Object) {
      super(JSON.stringify(message))
    } else {
      super(message)
    }
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

/**
 * Extend HTTPClientError to also apply a 400 status.
 */
export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400

  constructor(message: string | object = 'Bad Request') {
    super(message)
  }
}

/**
 * Extend HTTPClientError to also apply a 404 status.
 */
export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404

  constructor(message: string | object = 'Not found') {
    super(message)
  }
}

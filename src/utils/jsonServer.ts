import jsonServer from 'json-server'
import path from 'path'

const server = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const port = 3001

server.use(middleware)
server.use(jsonServer.bodyParser)

/**
 * Handle a GET /__rules call if the user browser JSON server default page.
 */
server.get('/__rules/', function(req, res, next) {
  next()
})

server.use(router)
server.listen(port, () => {
  console.log(`[API] - JSON Server is running on port ${port}`)
})

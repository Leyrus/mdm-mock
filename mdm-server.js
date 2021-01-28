const jsonServer = require('json-server')
const curUserJson = require('./json/current_user_profile.json')
const userProfineJson = require('./json/user_profile.json')
const timeZoneJson = require('./json/time_zone.json')
const userRolesJson = require('./json/user_roles.json')
const tokenJson = require('./json/token.json')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)


const token = 'Bearer sso_1.0_03ad656a-a6ca-4b21-b9f8-72b99ec9e463'
const AUTHORIZATION = 'Authorization';
// const SET_COOKIE = 'Set-Cookie';

server.get('/oauth2-consumer/tokens/@current', (req, res) => {
  res.header(AUTHORIZATION, token)
  // res.header(SET_COOKIE, `act=${token.split(' ')[1]}; Path=/;`)
  res.jsonp(tokenJson)
})

server.get('/mdm-adapter/api/v1/user-profile/roles', (req, res) => {
  res.header(AUTHORIZATION, token)
  // res.header(SET_COOKIE, `act=${token.split(' ')[1]}; Path=/;`)
  res.jsonp(userRolesJson)
})

server.get('/mdm-adapter/api/v1/user-profile/03ad656a-a6ca-4b21-b9f8-72b99ec9e463?showDetails=1&showRefs=1', (req, res) => {
  res.header(AUTHORIZATION, token)
  res.jsonp(userProfineJson)
})

server.get('/mdm-adapter/api/v1/user-profile', (req, res) => {
  res.header(AUTHORIZATION, token)
  res.jsonp(curUserJson)
})

server.get('/mdm-adapter/api/v1/catalogs/time_zone/items/search?showDetails=0&showRefs=0 ', (req, res) => {
  res.header(AUTHORIZATION, token)
  res.jsonp(timeZoneJson)
})

server.get('/mdm-adapter/api/v1/current-user-profile', (req, res) => {
  res.header(AUTHORIZATION, token)
  res.jsonp(userProfineJson)
})

server.use(jsonServer.bodyParser)
server.listen(55668, () => {
  console.log('JSON Server is running')
})

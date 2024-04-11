/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
// import SessionController from '#controllers/http/SessionController'
// import AuthController from '#controllers/http/AuthController'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/api/accounts/users', UsersController)

// router.post('/api/auth/login', [SessionController])
// router.post('/api/auth/me/login', [AuthController])
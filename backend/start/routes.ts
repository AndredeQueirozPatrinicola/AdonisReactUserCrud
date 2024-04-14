import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import UsersController from '#controllers/users_controller'
import SessionController from '#controllers/session_controller'


router.get('/api/accounts/users', [UsersController, 'index'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.get('/api/accounts/users/:id',[UsersController, 'show'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.put('/api/accounts/users',[UsersController, 'update'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.delete('/api/accounts/users',[UsersController, 'destroy'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.get('/api/accounts/users/me/:id',[UsersController, 'show'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.get('/api/auth/verify', [SessionController, 'index'])
      .use(middleware.auth({
        guards: ['api']
      }))

router.post('/api/auth/login', [SessionController, 'store'])

router.post('/api/accounts/users',[UsersController, 'store'])

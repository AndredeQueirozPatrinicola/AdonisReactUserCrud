/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import SessionController from '#controllers/http/SessionController'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/api/auth/login', [SessionController])

import { Router } from 'express'
import { authByCredentials } from '../middleware/auth'
import { createToken } from '../services/jwt'

const router = Router()

router.use(authByCredentials)

router.route('/')
  .post((req, res) => {
    const token = createToken(req.body.username)

    res.json({ accessToken: token })
  })

export default router

import { Router } from 'express'
import { User, isValidLogin } from '../services/db'

const router = Router()

router.route('/')
  .post((req, res, next) => {

  })

export default router

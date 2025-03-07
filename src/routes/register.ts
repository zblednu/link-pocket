import express from 'express'

import { addUser, getUsers, User } from '../services/db'

const router = express.Router()

router.route('/')
  .all((req, _, next) => {
    console.log([req.method, req.ip, Date()].join(' '))
    next()
  })
  .post(express.json(), (req, res) => {
    const user: User = {
      "username": req.body.username,
      "password": req.body.password
    }

    console.log(user)

    if (addUser(user)) {
      res.status(201).end()
      return
    }

    res.status(409).end()
  })
  .get((_, res) => {
    res.json(getUsers())
  })

export default router

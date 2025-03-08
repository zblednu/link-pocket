import { Request, Response, NextFunction } from 'express'
import { validateToken } from '../services/jwt'
import { validateCredentials, User } from '../services/db'

export function authByToken(req: Request, res: Response, next: NextFunction) {
  // auth header is in format 'Bearer TOKEN'
  const token = req.headers.authorization?.split(' ')[1]

  if (token && validateToken(token)) {
    next()
    return
  }

  res.status(403).end()
}

export function authByCredentials(req: Request, res: Response, next: NextFunction) {
  const user: User = {
    username: req.body.username,
    password: req.body.password
  }

  if (!validateCredentials(user)) {
    res.status(403).end()
    return
  }

  next()
}

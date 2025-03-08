import { Request, Response, NextFunction } from 'express'
import { validateToken } from '../services/jwt'
import { validateCredentials, User } from '../services/db'

export function authByToken(req: Request, res: Response, next: NextFunction) {
  // auth header is in format 'Bearer TOKEN'
  if (!req.headers.authorization) return res.sendStatus(403) as any;

  const token = req.headers.authorization?.split(' ')[1]
  const user = validateToken(token)

  if (!user) return res.sendStatus(403) as any;

  (req as any).user = user
  next()
}

export function authByCredentials(req: Request, res: Response, next: NextFunction) {
  const user: User = {
    username: req.body.username,
    password: req.body.password
  }

  if (!validateCredentials(user)) return res.sendStatus(403) as any

  next()
}

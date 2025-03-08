import { Request, Response, NextFunction } from 'express'

import { authenticateByToken } from '../services/jwt'

export default function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.body.token
  if (!authenticateByToken(token)) {
    res.status(403).end()
    return
  }

  next()
}

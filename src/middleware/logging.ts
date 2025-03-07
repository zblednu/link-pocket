import { Request, Response, NextFunction } from 'express'

export default function logging(req: Request, _: Response, next: NextFunction) {
  console.log(`${req.method} ${req.originalUrl} ${req.ip} ${Date()}`)
  next()
}

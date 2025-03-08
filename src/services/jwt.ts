import jwt from 'jsonwebtoken'

export function createToken(payload: string) {
  return jwt.sign(payload, process.env.JWT_SECRET as string)
}

export function validateToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string)
  } catch {
    return false
  }
}

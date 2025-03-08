import { Router } from 'express'

import { addBookmark, Bookmark, getBookmarks } from '../services/db'
import { authByToken } from '../middleware/auth'

const router = Router()

router.use(authByToken)

router.route('/')
  .post((req, res) => {
    const bookmark: Bookmark = {
      "username": (req as any).user,
      "link": req.body.link
    }

    if (addBookmark(bookmark)) {
      res.status(201).end()
      return
    }

    res.status(409).end()
  })
  .get((req, res) => {
    res.json(getBookmarks((req as any).user))
  })

export default router

import express from 'express'

import { addBookmark, Bookmark, getBookmarks } from '../services/db'

const router = express.Router()

router.route('/')
  .all((req, _, next) => {
    console.log([req.method, req.ip, Date()].join(' '))
    next()
  })
  .post(express.json(), (req, res) => {
    const bookmark: Bookmark = {
      "username": req.body.username,
      "link": req.body.bookmark
    }

    if (addBookmark(bookmark)) {
      res.status(201).end()
      return
    }

    res.status(409).end()
  })
  .get(express.json(), (req, res) => {
    res.json(getBookmarks(req.body.username))
  })

export default router

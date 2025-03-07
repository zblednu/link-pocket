import "dotenv/config"
import registerRouter from './routes/register'
import bookmarksRouter from './routes/bookmarks'

import express from 'express'
const app = express();

app.use('/register', registerRouter)
app.use('/bookmarks', bookmarksRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`live at ${PORT}`))

export type Bookmark = {
  username: string,
  link: string
}

export type User = {
  username: string,
  password: string
}

const bookmarkDb: Bookmark[] = []
const userDb: User[] = []




export function validateCredentials(user: User) {
  return userDb.some(elem =>
    (elem.username === user.username && elem.password === user.password))
}

export function addUser(user: User) {
  if (!user.username || !user.password) return false
  if (userDb.some(elem => user.username === elem.username)) return false

  userDb.push(user)
  return true
}

// get all registered usernames
export function getUsers() {
  return userDb.map(elem => elem.username)
}




export function addBookmark(bookmark: Bookmark) {
  if (bookmarkDb.includes(bookmark)) return false
  if (!userDb.some(elem => bookmark.username === elem.username)) return false

  bookmarkDb.push(bookmark)
  return true
}

// get all bookmarks for particular user
export function getBookmarks(username: string) {
  return (bookmarkDb
    .filter(elem => elem.username === username)
    .map(elem => elem.link))
}

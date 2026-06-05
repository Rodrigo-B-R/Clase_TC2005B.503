import "dotenv/config"

import express from "express"
import morgan from "morgan"
import indexRoutes from "./routing/routes.js"
import usersRoutes from "./routing/users.routes.js"
import { query } from "./utils/db.js"

import loginRoutes from "./routing/login.routes.js"

const app = express()

app.use(morgan("dev"))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if (req.method === 'OPTIONS') return res.sendStatus(204)
    next()
})
app.use(express.json())
app.use(indexRoutes)
app.use(usersRoutes)
app.use(loginRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    await query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50), password VARCHAR(100), age INTEGER DEFAULT 0)")
    console.log(`Server is running on http://localhost:${PORT}`)
})

import { query } from '../utils/db.js'
import { verifyPassword } from '../utils/hash.js'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await query('SELECT * FROM users WHERE email = $1', [email])
        if (result.rows.length === 0) return res.status(401).json({ login: false, message: 'Invalid credentials' })
        if (!verifyPassword(password, result.rows[0].password)) return res.status(401).json({ login: false, message: 'Invalid credentials' })
        const { password: _, ...user } = result.rows[0]
        res.status(200).json({ login: true, user })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

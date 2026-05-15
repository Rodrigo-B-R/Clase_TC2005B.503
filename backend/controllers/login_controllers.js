import { query } from '../utils/db.js'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await query('SELECT * FROM users WHERE email = $1', [email])
        if (result.rows.length === 0) return res.status(401).json({ login: false, message: 'Invalid credentials' })
        if (result.rows[0].password !== password) return res.status(401).json({ login: false, message: 'Invalid credentials' })
        res.status(200).json({ login: true, user: result.rows[0] })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

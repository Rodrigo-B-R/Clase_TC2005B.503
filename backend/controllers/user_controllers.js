import { query } from '../utils/db.js'

export const getUsers = async (req, res) => {
    try {
        const result = await query('SELECT * FROM users')
        res.json(result.rows)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await query('SELECT * FROM users WHERE id = $1', [id])
        if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' })
        res.json(result.rows[0])
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const result = await query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        const result = await query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        )
        if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' })
        res.json(result.rows[0])
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
        if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' })
        res.json({ message: 'User deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

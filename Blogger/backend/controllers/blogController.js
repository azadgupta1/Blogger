import pool from '../config/db.js';

export const getAllBlogs = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBlog = async (req, res) => {
    const { title, content, author_id } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO blogs (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, author_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

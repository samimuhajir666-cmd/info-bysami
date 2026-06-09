const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection (free database from Clever Cloud)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('✅ MySQL connected');
    // Create table if not exists
    const createTable = `
        CREATE TABLE IF NOT EXISTS messages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    db.query(createTable);
});

// CREATE
app.post('/api/messages', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, msg: '✅ Message saved' });
    });
});

// READ all
app.get('/api/messages', (req, res) => {
    db.query('SELECT * FROM messages ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// UPDATE
app.put('/api/messages/:id', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'UPDATE messages SET name=?, email=?, message=? WHERE id=?';
    db.query(sql, [name, email, message, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ msg: '✅ Updated' });
    });
});

// DELETE
app.delete('/api/messages/:id', (req, res) => {
    db.query('DELETE FROM messages WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ msg: '✅ Deleted' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
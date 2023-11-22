const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books',  // <-- Change to your database name
}, console.log(`Connected to the database.`));

db.query('SELECT * FROM books', function(_, results) {
    console.log("results", results);
});

app.use((_, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
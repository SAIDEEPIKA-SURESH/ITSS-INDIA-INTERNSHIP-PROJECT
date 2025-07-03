const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Saideepikasuresh2005#',
    database: 'warehouse_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Connected to MySQL');
});

// POST Route to Insert Product
app.post('/add-product', (req, res) => {
    const {
        product_id,
        product_name,
        category,
        quantity,
        supplier_name,
        date_of_entry,
        date_of_expiry,
        availability_status,
        warehouse_location,
        brand
    } = req.body;

    const suppliers = Array.isArray(supplier_name) ? supplier_name.join(', ') : supplier_name;

    const sql = `INSERT INTO inventory 
        (product_id, product_name, category, quantity, suppliers, entry_date, expiry_date, status, location, brand) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [product_id, product_name, category, quantity, suppliers, date_of_entry, date_of_expiry, availability_status, warehouse_location, brand];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.send('<h2>❌ Failed to Add Product</h2>');
        } else {
            res.send('<h2>✅ Product Added Successfully!</h2>');
        }
    });
});
app.get('/', (req, res) => {
    res.redirect('/login_form.html');
});


app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

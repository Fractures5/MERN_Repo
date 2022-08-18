// app.js
require('dotenv').config({ path: "./env"});
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const books = require('./routes/api/books');
const app = express();
const path =  require('path');
const { response } = require('express');

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/books', books);

app.use(express.static(path.join(__dirname, "./my-app/build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "my-app", "build", "index.html"))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
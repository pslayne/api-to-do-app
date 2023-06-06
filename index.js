const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.DEFAULT_PORT;

app.get('/', (req, res) => {
    res.send('To-do App Server');
});

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
});
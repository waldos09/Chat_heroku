const express = require('express');
const router = express.Router;

router.get('index', (req, res => {
    res.render('../public/index.html');
}));
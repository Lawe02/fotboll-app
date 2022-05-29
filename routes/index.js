const express = require('express');
const router = express.Router();
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');

router.get('/', (req, res) => {
    res.sendFile('../public/index.html');
});

module.exports = router; 
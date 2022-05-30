const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile('C:/Users/Lawe Zangena/Prak/views/index.html');
});


module.exports = router; 
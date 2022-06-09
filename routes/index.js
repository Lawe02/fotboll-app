const express = require('express');
const router = express.Router();
var Airtable = require('airtable');
var hash = require('object-hash');
require('dotenv').config();
var base = new Airtable({apiKey: process.env.api_KEY}).base(process.env.base);


router.get('/', (req, res) => {
    res.render('C:/Users/Lawe Zangena/Prak/public') 
});

router.post('/login', (req, res) => {

    var password = req.body.Password;
    const hashPassword = hash.MD5(password);
    var str = 'C:/Users/Lawe Zangena/Prak/private/admin.html';
    str = str.replace("/app/", "")
    
    base('login').select().eachPage(page = (records, fetchNextPage) => {
        records.forEach(record => {
            var logPass = record.fields.Password;
            const pass = hash.MD5(logPass);
            if(req.body.Username == record.fields.Username) 
            if(hashPassword == pass) 
            { 
                res.sendFile(str);
            }else{
                res.sendFile('C:/Users/Lawe Zangena/Prak/public/index.html');    
            }
        });
        try {
            fetchNextPage();

        } catch (error) {
            console.log(error)
        }
    },
    done = (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
})



module.exports = router; 
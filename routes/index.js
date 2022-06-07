const express = require('express');
const router = express.Router();
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');


router.get('/', (req, res) => {
    res.render('C:/Users/Lawe Zangena/Prak/public') 
});

router.post('/login', (req, res) => {

    base('login').select().eachPage(page = (records, fetchNextPage) => {
        records.forEach(record => {
            if(req.body.Username == record.fields.Username) 
            if(req.body.Password == record.fields.Password) 
            { 
                res.sendFile('C:/Users/Lawe Zangena/Prak/private/admin.html');
            }
            else{
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
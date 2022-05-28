const express = require('express');
const router = express.Router();
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');


router.get('/', (req, res) => {
    // res.send('Hello from data');

    let recordList = [];

    base('players').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 6,
        view: "Grid view",
        fields: [
            "Name",
            "games",
            "Goals",
            "assists",
            "position"
        ]
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            recordList.push({
                "record": record._rawJson
            })
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        res.send(recordList);
        if (err) { console.error(err); return; }
    });
    
});

module.exports = router;
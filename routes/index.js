const express = require('express');
const router = express.Router();
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');

base('players').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 6,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'), record.get('position'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

router.get('/', (req, res) => {
    res.send('Hello from index');
});

module.exports = router; 
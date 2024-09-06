const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/38027626-e4848441-0899-40fa-b315-45f782f28544?access_key=${process.env.secretKey}`,
    // collection: require('./Dmoney collection/Dmoney API Tests.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

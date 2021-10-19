const mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const {
    dateTime
} = require('./bin/dateTime');
const {
    emoji
} = require('./bin/emoji');
const {
    sauld
} = require('./bin/sauld');

// get current date and time
const readmeData = {
    currentDate: dateTime(Date.now()),
    currentEmoji: emoji(dateTime(Date.now())),
    currentSaul: sauld()
}

// create README
fs.readFile(path.join(__dirname, './', 'lib', 'mustache', 'readme.mustache'), (err, data) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, 'README.md'), mustache.render(data.toString(), readmeData));
});
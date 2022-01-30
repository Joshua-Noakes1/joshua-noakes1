const mustache = require('mustache'),
    path = require('path'),
    {
        readFile,
        writeFileSync
    } = require('fs');

// get current date and time
const readmeData = {
    currentDate: require('./bin/dateTime')(Date.now()),
    currentEmoji: require('./bin/emoji'),
    currentGif: require('./bin/currentGif')
}

// create README
readFile(path.join(__dirname, './', 'lib', 'mustache', 'readme.mustache'), (err, data) => {
    if (err) throw err;
    writeFileSync(path.join(__dirname, 'README.dev.md'), mustache.render(data.toString(), readmeData));
});
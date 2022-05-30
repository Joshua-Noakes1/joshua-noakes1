const mustache = require('mustache'),
    path = require('path'),
    {
        readFile,
        writeFileSync
    } = require('fs');

// get current date and time
const readmeData = {
    nameEmoji: require('random-unicode-emoji').random({
        count: 1
    })[0],
    gifEmoji: require('random-unicode-emoji').random({
        count: 1
    })[0],
    currentGif: require('./lib/currentGif')()
}

// create README
readFile(path.join(__dirname, './', 'lib', 'mustache', 'readme.mustache'), (err, data) => {
    if (err) throw err;
    writeFileSync(path.join(__dirname, 'README.md'), mustache.render(data.toString(), readmeData));
});
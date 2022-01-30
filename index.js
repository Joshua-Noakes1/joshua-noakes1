const mustache = require('mustache'),
    path = require('path'),
    {
        readFile,
        writeFileSync
    } = require('fs');

async function start() {
    // get current date and time
    const readmeData = {
        currentEmoji: await require('./bin/emoji')(),
        currentGif: await require('./bin/currentGif')()
    }

    // create README
    readFile(path.join(__dirname, './', 'lib', 'mustache', 'readme.mustache'), (err, data) => {
        if (err) throw err;
        writeFileSync(path.join(__dirname, 'README.md'), mustache.render(data.toString(), readmeData));
    });
}

start();
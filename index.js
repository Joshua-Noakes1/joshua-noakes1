// we import mustache, filesystem, our mustache file, big data array, emoji picker, date picker
const Mustache = require('mustache');
const delay = require('delay');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
const data = require('./data/data');
const emoji_now = require('./subset/emoji');
const date_now = require('./subset/date');
const time_now = require('./subset/time');
// making sure emoji and date pickers run
emoji_now.emoji();
date_now.date_cheker();
time_now.time_func();

while (data.data.complete.date == 0) {
    (async () => {
        await delay(1 * 1000);
    })();
}

// building our data for mustache
let DATA = {
    name: 'Joshua',
    date: data.data.date,
    tn: data.data.time,
    emoji: data.data.emoji
};

/**
 * A - We open 'main.mustache'
 * B - We ask Mustache to render our file with the data
 * C - We create a README.md file with the generated output
 */
function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}

generateReadMe();
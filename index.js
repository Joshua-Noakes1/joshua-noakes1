// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the 'name' and 'date' property.
 */

// NYE and XMSD emoji changes

const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
})
const month = new Date().toLocaleDateString('en-GB', {
    month: 'numeric',
})

if (month == 12) {
    if (date == 25) {
        var dayemoji = '🎄';
    } else if (date == 31) {
        var dayemoji = '🎉';
    } else {
        var dayemoji = '👋';
    }
} else if (month == 1) {
    if (date == 1) {
        var dayemoji = '🎉';
    } else {
        var dayemoji = '👋';
    }
} else {
    var dayemoji = '👋';
}

let DATA = {
    name: 'Joshua',
    date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        timeZone: 'Europe/London',
    }),
    time: new Date().toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/London',
    }),
    emoji: dayemoji,
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
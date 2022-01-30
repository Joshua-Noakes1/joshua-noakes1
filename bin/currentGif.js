const {
    readJSON
} = require('./readWrite'),
    path = require('path');

async function currentGif() {
    switch (Math.round(Math.random() * 3)) {
        case 0:
        case 1:
            var gifs = await readJSON(path.join(__dirname, 'gifs', 'saul.json'), true);
            break;
        case 2:
        case 3:
            var gifs = await readJSON(path.join(__dirname, 'gifs', 'jinx.json'), true);
            break;
    }

    return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = currentGif;
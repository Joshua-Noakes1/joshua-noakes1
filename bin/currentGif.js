const {
    readJSON
} = require('./readWrite'),
    path = require('path');

async function currentGif() {
    var listOfGifs = [path.join(__dirname, 'gifs', 'jinx.json')];
    var gifs = await readJSON(listOfGifs[Math.floor(Math.random() * listOfGifs.length)], true);
    return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = currentGif;

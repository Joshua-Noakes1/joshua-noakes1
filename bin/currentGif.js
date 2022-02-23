const {
    readJSON
} = require('./readWrite'),
    path = require('path');

async function currentGif() {
    var listOfGifs = [path.join(__dirname, 'gifs', 'jinx.json'), path.join(__dirname, 'gifs', 'junko.json'), path.join(__dirname, 'gifs', 'saul.json')];
    var gifs = await readJSON(listOfGifs[Math.floor(Math.random() * listOfGifs.length)], true);
    return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = currentGif;

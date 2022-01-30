function currentGif() {
    const gifs = require('./gifs.json');
    return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = currentGif;
const {
    readJSON,
    writeJSON
} = require('./readWrite'),
    lcl = require('cli-color'),
    path = require('path');

async function currentGif() {
    // load the last gif json
    var lastGif = await readJSON(path.join(__dirname, "lastUsedGif.json"), true);
    if (!lastGif.success) var lastGif = {"success": true, "name": ""};

    // get list of gifs
    var listOfGifs = [path.join(__dirname, 'gifs', 'jinx.json'), path.join(__dirname, 'gifs', 'saul.json'), path.join(__dirname, 'gifs', 'asuka.json'), path.join(__dirname, 'gifs', 'cocogoat.json'), path.join(__dirname, 'gifs', 'asuka.json'), path.join(__dirname, 'gifs', 'holo.json')];
    var gifs = await readJSON(listOfGifs[Math.floor(Math.random() * listOfGifs.length)], true);
    var gif = gifs[Math.floor(Math.random() * gifs.length)];

    // check if gif is same as previous days gif
    if (lastGif.name === gif.name) var gifSame = true;
    while(gifSame) {
        // get new gif if same
        console.log(lcl.yellow("[GIF - Warn]"), `The gif "${lastGif.name}" was picked again`);
        var gif = gifs[Math.floor(Math.random() * gifs.length)];
        if (lastGif.name === gif.name) var gifSame = true;
        else var gifSame = false;
    }

    // save gif to last used gif
    lastGif.name = gif.name;
    await writeJSON(path.join(__dirname, "lastUsedGif.json"), lastGif, true);

    // prepend base url to gif
    gif.gif = `https://raw.githubusercontent.com/Joshua-Noakes1/joshua-noakes1/dev/lib/gifs/media/${gif.gif}?raw=true`;
    return gif;
}

module.exports = currentGif;

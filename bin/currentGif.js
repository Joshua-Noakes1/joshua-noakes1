function currentGif() {
    const gifs = [{
            "name": "Saul Goodman",
            "gif": "https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/caught-trolling.gif"
        },
        {
            "name": "Saul Goodman",
            "gif": "https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/epic-saul-goodman.gif"
        },
        {
            "name": "Saul Goodman",
            "gif": "https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/saul-goodman-breaking-bad.gif"
        },
        {
            "name": "Saul Goodman",
            "gif": "https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/tenor%20(3).gif"
        },
    ];
    return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = currentGif;
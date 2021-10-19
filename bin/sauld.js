function sauld() {
    const sauls = ['https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/caught-trolling.gif', 'https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/epic-saul-goodman.gif', 'https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/saul-goodman-breaking-bad.gif', 'https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Other%20Repos/joshua-noakes1/tenor%20(3).gif'];
    return sauls[Math.floor(Math.random() * sauls.length)];
}

module.exports = {sauld}
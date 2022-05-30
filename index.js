const mustache = require('mustache'),
    lcl = require('cli-color'),
    path = require('path'),
    {
        readFile,
        writeFileSync
    } = require('fs');

(async function () {
    // get current date and time
    const readmeData = {
        date: require('./lib/dateTime')(),
        currentGif: await require('./lib/currentGif')()
    }

    console.log(lcl.blue("[GIF - Info]"), `Using gif "${readmeData.currentGif.name}"`);

    // create README
    console.log(lcl.blue("[Template - Info]"), `Creating README for the ${readmeData.date.date}${readmeData.date.ordinal} of ${readmeData.date.monthName} ${readmeData.date.year}`);
    readFile(path.join(__dirname, './', 'lib', 'mustache', 'readme.mustache'), (err, data) => {
        if (err) {
            console.log(lcl.red("[Template - Error]"), `Could not read the template for the README.`);
            throw err
        };
        writeFileSync(path.join(__dirname, process.env.devci !== "true" ? "READMD.md" : "READMD.dev.md"), mustache.render(data.toString(), readmeData));
    });
    console.log(lcl.green("[Template - Success]"), `Successfully created README for the ${readmeData.date.date}${readmeData.date.ordinal} of ${readmeData.date.monthName} ${readmeData.date.year}`);
})();
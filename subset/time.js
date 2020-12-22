const data = require('../data/data');
const time =  new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    timeZone: 'Europe/London',
});

function time_func() {
    data.data.time = time;
}

time_func();

module.exports = {time_func};
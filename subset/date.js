const data = require('../data/data');
const localdata = {
    changed: '0',
    text: '',
};

const month = new Date().toLocaleDateString('en-GB', {
    month: 'long',
    timeZone: 'Europe/London'
});

const weekday = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    timeZone: 'Europe/London'
});

const number = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    timeZone: 'Europe/London'
});

function date() {
    switch (number) {
        case 1:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}st of ${month}`;
            break;
        case 2:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}nd of ${month}`;
            break;
        case 3:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}rd of ${month}`;
            break;
        case 11:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}th of ${month}`;
            break;
        case 12:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}th of ${month}`;
            break;
        case 13:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}th of ${month}`;
            break;
        default:
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}th of ${month}`;
    }
}

function date_cheker() {
    if (month == 'December') {
        if (number == '25') {
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}th of ${month} Merry Christmas!`;
        } else if (number == '31') {
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}st of ${month} Happy New Year's Eve!`;
        } else {
            date();
        }
    } else if (month == 'January') {
        if (number == '1') {
            localdata.changed = 1;
            localdata.text = `${weekday}, the ${number}st of ${month} Happy New Year's Day!`;
        } else {
            date();
        }
    } else {
        date();
    }

    while (localdata.changed == 0) {
        console.log('waiting');
    }
    data.data.complete.date = 1;
    data.data.date = localdata.text;
}

module.exports = {
    date_cheker
};
const dateTime = require('./dateTime');

function emoji() {
    const date = dateTime(Date.now());
    switch (date.month) {
        case '0': // January
            if (date.date == '1') return '🎉';
            return '👋';
        case '11': // December
            if (date.date == '25') return '🎄';
            if (date.date == '31') return '🎉';
            return '👋';
        default:
            return '👋';
    }
}

module.exports = emoji;
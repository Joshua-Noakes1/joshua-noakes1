// NYE and XMSD emoji changes

const data = require('../data/data');

const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
});
const month = new Date().toLocaleDateString('en-GB', {
    month: 'numeric',
});

function emoji() {
    switch (month) {
        case '1':
            switch (date) {
                case '1':
                    data.data.complete.emoji = 1;
                    data.data.emoji = '🎉';
                    break;
                default:
                    data.data.complete.emoji = 1;
                    data.data.emoji = '👋';
            }
            break;
        case '12':
            switch (date) {
                case '25':
                    data.data.complete.emoji = 1;
                    data.data.emoji = '🎄';
                    break;
                case '31':
                    data.data.complete.emoji = 1;
                    data.data.emoji = '🎉';
                    break;
                default:
                    data.data.complete.emoji = 1;
                    data.data.emoji = '👋';
            }
            break;
    }
};

module.exports = {emoji};
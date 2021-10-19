function emoji(date) {
    if (date.month == 'January') {
        // new years day
        if (Number(date.date) == 1) {
            var currentEmoji = '🥳';
        }
    } else if (date.month == 'December') {
        // christmas 
        if (Number(date.date) == 25) {
            var currentEmoji = '🎄';
            // new years eve
        } else if (Number(date.date) == 31) {
            var currentEmoji = '🎉';
        }
    }

    // default
    if (!currentEmoji) {
        var currentEmoji = '👋';
    }

    return currentEmoji;
}

module.exports = {
    emoji
}
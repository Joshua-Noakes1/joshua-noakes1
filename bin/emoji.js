function emoji(date) {
    switch (date.month) {
        case '0': // January
            if (date.date == '1') return '🎉';
            break;
        case '11': // December
            if (date.date == '25') return '🎄';
            if (date.date == '31') return '🎉';
            break;
        default:
            return '👋';
    }
}

module.exports = {
    emoji
}
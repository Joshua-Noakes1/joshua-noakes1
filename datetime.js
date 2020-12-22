const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
})
const month = new Date().toLocaleDateString('en-GB', {
    month: 'numeric',
})

if (month == 12) {
    if (date == 25) {
        var emoji = "🎄";
    } else if (date == 31) {
        var emoji = "🎉";
    } else {
        var emoji = "👋";
    }
} else if (month == 1) {
    if (date == 1) {
        var emoji = "🎉";
    } else {
        var emoji = "👋";
    }
} else {
    var emoji = "👋";
}



console.log(emoji)
const time =  new Date().toLocaleTimeString('en-GB', {
    hour: 'numeric',
    timeZone: 'Europe/London',
});

console.log(time);
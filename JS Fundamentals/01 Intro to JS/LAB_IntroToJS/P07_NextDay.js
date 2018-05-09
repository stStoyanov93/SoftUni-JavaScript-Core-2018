function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let newDay = 24 * 60 * 60 * 1000;
    let newDate = new Date(date.getTime() + newDay);

    console.log(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate());
}
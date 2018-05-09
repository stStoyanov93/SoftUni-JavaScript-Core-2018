function getLastDayOfPreviousMonth(data) {
    let [day, month, year] = data;

    let newDate = new Date(year, month - 1, 0);
    let dayOfPreviousMonth = newDate.getDate();

    return dayOfPreviousMonth;
}
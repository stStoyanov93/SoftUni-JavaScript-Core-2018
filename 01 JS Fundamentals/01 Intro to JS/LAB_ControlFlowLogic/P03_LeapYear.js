function isLeap(year) {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    let answer = isLeap ? "yes" : "no";

    return answer;
}
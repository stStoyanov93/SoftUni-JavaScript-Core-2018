function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let daysContainer = document.getElementById('days');
    let hoursContainer = document.getElementById('hours');
    let minutesContainer = document.getElementById('minutes');
    let secondsContainer = document.getElementById('seconds');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let days = daysContainer.value;

        hoursContainer.value = days * 24;
        minutesContainer.value = days * 1440;
        secondsContainer.value = days * 86400;
    }

    function convertHours() {
        let hours = hoursContainer.value;

        daysContainer.value = hours / 24;
        minutesContainer.value = hours * 60;
        secondsContainer.value = hours * 3600;
    }

    function convertMinutes() {
        let minutes = minutesContainer.value;

        daysContainer.value = minutes / (60 * 24);
        hoursContainer.value = minutes / 60;
        secondsContainer.value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = secondsContainer.value;

        daysContainer.value = seconds / (60 * 60 * 24);
        hoursContainer.value = Math.round(seconds / 3600);
        minutesContainer.value = seconds / 60;
    }
}
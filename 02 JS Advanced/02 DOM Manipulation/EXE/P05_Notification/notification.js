function notify(message) {
    let notificationBox = document.getElementById('notification');
    notificationBox.textContent = message;
    notificationBox.style.display = 'block';

    setTimeout(hideMessage, 2000);

    function hideMessage() {
        notificationBox.textContent = '';
        notificationBox.style.display = 'none';
    }
}
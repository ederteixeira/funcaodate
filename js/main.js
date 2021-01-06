function startClock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    if (hour == 0) hour = 12;

    document.getElementById("horario").innerHTML = hour + ":" + min + ":" + sec + " " + session;
}

function stopClock() {
    document.getElementById("horario").innerHTML = "00:00:00 AM";
}
$(document).ready(function () {
    //======tr & brewery ======//
    let date = new Date();
    let day = date.getDay();
    if (day == 0 || day == 6) {
        document.getElementById("openTime_tr").innerHTML = "OPEN 12:00 - 24:00";
    } else {
        document.getElementById("openTime_tr").innerHTML = "OPEN 14:00 - 20:00";
    }
    if (day == 0 || day == 6) {
        document.getElementById("openTime_brewery").innerHTML = "OPEN 10:00 - 18:00";
    } else {
        document.getElementById("openTime_brewery").innerHTML = "CLOSED";
    }
});

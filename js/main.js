/**
 * Created by ivanivic on 05/05/16.
 */
// TIMEZONE
var timeElement = document.getElementById("time-of-day");
var timezoneElement = document.getElementById("timezone");
var splitDate = new Date().toString().split(" ");

function insertTime() {
    var splitDate = new Date().toString().split(" ");
    timeElement.innerHTML = splitDate[4];
}

insertTime();
timezoneElement.innerHTML = splitDate[5] + " " + splitDate[6];
setInterval(insertTime, 1000);

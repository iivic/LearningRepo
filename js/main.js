/**
 * Created by ivanivic on 05/05/16.
 */
// TIMEZONE
var timeElement = $("#timeOfday");
var timezoneElement = $("#timezone");
var splitDate = new Date().toString().split(" ");

function insertTime() {
    var splitDate = new Date().toString().split(" ");
    timeElement.text(splitDate[4]);
}

insertTime();
timezoneElement.text([splitDate[5],splitDate[6]].join(" "));
setInterval(insertTime, 1000);

var timeElement = $("#timeOfday"),
    timezoneElement = $("#timezone"),
    splitDate = new Date().toString().split(" ");

function insertTime() {
    splitDate = new Date().toString().split(" ");
    timeElement.text(splitDate[4]);
}

insertTime();
timezoneElement.text([splitDate[5], splitDate[6]].join(" "));
setInterval(insertTime, 1000);

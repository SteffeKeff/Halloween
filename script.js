// var dateNow = new Date();
//
// var timeNow = dateNow.getTime();
// var timeTo = new Date('2016-10-28 22:00');
//
// console.log(timeTo);
// console.log(dateNow.getHours());
//
// var diff = timeTo-timeNow;
//
// console.log(diff);
//
// var milliseconds = diff;
// var seconds = diff/(1000);
// var minutes = diff/(1000*60);
// var hours = diff/(1000*60*60);
// var days = diff/(1000*60*60*24);
//
// console.log("millis left: " + milliseconds);
// console.log("seonds left: " + seconds);
// console.log("minutes left: " + minutes);
// console.log("hours left: " + hours);
// console.log("days left: " + days);
var end = new Date('2016-10-28 22:00');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var ms = Math.floor((distance % _minute));

        var s = ms.toString();
        var seconds = s.slice(0, 2) + "." + s.slice(2);

        document.getElementById('countdown').innerHTML = days + 'dagar ';
        document.getElementById('countdown').innerHTML += hours + 'timmar ';
        document.getElementById('countdown').innerHTML += minutes + 'minuter ';
        document.getElementById('countdown').innerHTML += seconds + 'sekunder';
    }

    timer = setInterval(showRemaining, 1);

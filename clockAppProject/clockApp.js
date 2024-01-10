//Change every second
setInterval(showTime,1000);

//Let's build a showTime function.
function showTime(){
   let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let am_pm = "AM";
    //setting 12-hour format:
    if (hours >= 12){
        hours -= 12;
        am_pm = "PM";
    } else if(hours == 0){
        hours = 12;
        am_pm="AM";
    }

    hours =
        hours < 10 ? "0" + hours : hours;
    minutes =
        minutes < 10 ? "0" + minutes : minutes;
    seconds =
        seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds + am_pm;
    //displaying the time:
    document.getElementById("clock").innerHTML = currentTime;
}

showTime();
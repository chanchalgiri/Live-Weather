var dayDate = document.getElementById("day-date");
// console.log(dayDate);

var currentDay = () => {
    let dayArr = ["SUN","MON","TUE","WED","THUR","FRI","SAT"]
    let monthArr = ["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
    var d = new Date();
    var day = dayArr[d.getDay()];
    var date = d.getDate();
    var mon = monthArr[d.getMonth()];
    var resultDay = `${day} | ${mon} ${date}`;
    return resultDay; 
}

// console.log(currentDay());
// currentDay();

var currentTime = () =>{
    var dt = new Date();
    var hours = dt.getHours();
    var min = dt.getMinutes();
    var amPM = "AM";
    if(hours > 11){
        amPM = "PM";
        hours = hours - 12;
    }
    if(min < 10){
        min = "0" + min;
    }
    var resultTime = `${hours}:${min} ${amPM}`;
    return resultTime;
}

// console.log(currentTime());
// currentTime();

dayDate.innerHTML = currentDay() + " | " + currentTime();
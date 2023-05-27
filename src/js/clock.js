const clock = document.querySelector(".clock")

// 시계 구현하기
let nowYear = 0;
let nowMonth = 0;
let nowDate = 0;
let nowDay = 0;
const days = ["일","월","화","수","목","금","토"];

let nowHour = 0;
let nowMinute = 0;
let nowSecond = 0;


// change time text
function getNowTime() {
    // get time from datetime
    var datetime = new Date()
    nowHour = datetime.getHours()<12?
        "오전 " + datetime.getHours():
        datetime.getHours()===12?
            "오후 " + datetime.getHours():
            "오후 " + (datetime.getHours() - 12);
    nowMinute = (datetime.getMinutes()<10?"0":'') + datetime.getMinutes();
    nowSecond = (datetime. getSeconds()<10?"0":'') + datetime.getSeconds();
    // set text to h1 tag
    let clockTime = `${nowHour}:${nowMinute}:${nowSecond}`
    clock.querySelector("#clock_time").innerText = clockTime
}

// change date text
function getNowDate() {
    // get time from datetime
    var datetime = new Date()
    nowYear = datetime.getFullYear()
    nowMonth = datetime.getMonth() + 1
    nowDate = datetime.getDate()
    nowDay = datetime.getDay()
    nowDay = days[nowDay]
    // set text to h1 tag
    let clockDate = `${nowYear}년 ${nowMonth}월 ${nowDate}일(${nowDay})`
    clock.querySelector("#clock_date").innerText = clockDate
}

getNowDate()
getNowTime()
setInterval(getNowTime, 1000);

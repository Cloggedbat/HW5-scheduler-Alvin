$(document).ready(function () {


// curent date + time
// const m = moment();
// const m2 = moment()
//  const now = new Date(year, month, day);
// document.getElementById('test').innerHTML = date;
var NowMoment = moment();
var eDisplayMoment = document.getElementById('test');
eDisplayMoment.innerHTML = NowMoment.format('M-D-YYYY');

// const saveTask = (ev)=>{
//   ev.preventDefault();  
//   let save = 
// }
// moment().format('MMMM Do YYYY, h:mm:ss a');

// document.addEventListener("DOMContentLoaded", ()=>{
//     document.getElementById('btn').addEventListener('click', saveTask)
// })

// $("#saveBtn").on("click",function(){
//    console.log("click")
// });

function wawa(buttonClassName, textAreaClassName, keyName){
    $(buttonClassName).on("click", function () {
        // get text from wawa
        var textarea = $(textAreaClassName).val();

        localStorage.setItem(keyName, textarea)
    })
    
    var save = localStorage.getItem(keyName)
    console.log(save)
    $(textAreaClassName).val(save);
}
wawa("#saveBtn", ".user-1", "data10")
wawa("#saveBtn1", ".user-2", "data9")
wawa("#saveBtn2", ".user-3", "data8")
wawa("#saveBtn3", ".user-4", "data7")
wawa("#saveBtn4", ".user-5", "data6")
wawa("#saveBtn5", ".user-6", "data5")
wawa("#saveBtn6", ".user-7", "data4")
wawa("#saveBtn7", ".user-8", "data3")
wawa("#saveBtn8", ".user-9", "data2")
wawa("#saveBtn9", ".user-10", "data1")

// if (localStorage["user"]) {
//     var user = localStorage["user"];
//     document.getElementById("user").value = user;
//     alert("you are already a user")
// }
// else {
//     document.getElementById("user").placeholder = "What will you be foing today";
//     console.log("user no found in localStorage")
// }
// document.getElementById("saveBtn").addEventListener("click", function () {
//     var user = document.getElementById("user").value;
//     //localStorage["user"] = user ;
//     localStorage.setItem("user", user);
//     alert("your task has been updated");
//     console.log("click")
// }, false);




let newArray = [];
let time = moment();
let timeFormat = "hh:mma"
let eightStart = moment('8:00am', timeFormat)
let eightEnd = moment('8:59am', timeFormat)
let nineStart = moment('9:00am', timeFormat)
let nineEnd = moment('9:59am', timeFormat)
let tenStart = moment('10:00am', timeFormat)
let tenEnd = moment('10:59am', timeFormat)
let elevenStart = moment('11:00am', timeFormat)
let elevenend = moment('11:59am', timeFormat)
let twelveStart = moment('12:00am', timeFormat)
let oneStart = moment('1:00pm', timeFormat)
let oneEnd = moment('1:59pm', timeFormat)
let twoStart = moment('2:00pm', timeFormat)
let twoEnd = moment('2:59pm', timeFormat)
let threeStart = moment('3:00pm', timeFormat)
let threeEnd = moment('3:59pm', timeFormat)
let fourStart = moment('4:00pm', timeFormat)
let fourEnd = moment('4:59pm', timeFormat)
let fiveStart = moment('5:00pm', timeFormat)
let fiveEnd = moment('5:59pm', timeFormat)

setInterval(function () {
    checkTime();
}, 1000);

// function checkTime() {
//     if (time.isBefore(eightStart)) {
//         $('user').addClass('future')
//     } else if (time.isBetween(eightStart, eightEnd)) {
//         $('user').addClass('present')
//     } else if (time.isAfter(eightEnd)) {
//         $('user').addClass('past')
//     }
// }

// iso string
// m = moment("2020/08/18 2:32PM", "DD/MM/YYYY");

// the dates are in the log
// console.log(m.year());
// console.log(m.toString());;
// console.log(m.toISOString());
});   
   
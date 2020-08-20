// curent date + time
// const m = moment();
// const m2 = moment()
//  const now = new Date(year, month, day);
// document.getElementById('test').innerHTML = date;
var NowMoment = moment();
var eDisplayMoment = document.getElementById('test');
eDisplayMoment.innerHTML = NowMoment.format('YYYY-M-D');

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

if (localStorage["user"]) {
    var user = localStorage["user"];
    document.getElementById("user").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn").addEventListener("click", function () {
    var user = document.getElementById("user").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user", user);
    alert("your task has been updated");
    console.log("click")
}, false);



if (localStorage["user1"]) {
    var user = localStorage["user1"];
    document.getElementById("user1").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user1").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn1").addEventListener("click", function () {
    var user = document.getElementById("user1").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user1", user);
    alert("your task has been updated");
    console.log("click")
}, false);





if (localStorage["user2"]) {
    var user = localStorage["user2"];
    document.getElementById("user2").value = user;

}
else {
    document.getElementById("user2").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn2").addEventListener("click", function () {
    var user = document.getElementById("user2").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user2", user);
    alert("your task has been updated");
    console.log("click")
}, false);








if (localStorage["user3"]) {
    var user = localStorage["user3"];
    document.getElementById("user3").value = user;

}
else {
    document.getElementById("user3").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn3").addEventListener("click", function () {
    var user = document.getElementById("user3").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user3", user);
    alert("your task has been updated");
    console.log("click")
}, false);



if (localStorage["user4"]) {
    var user = localStorage["user4"];
    document.getElementById("user4").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user4").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn4").addEventListener("click", function () {
    var user = document.getElementById("user4").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user4", user);
    alert("your task has been updated");
    console.log("click")
}, false);




if (localStorage["user5"]) {
    var user = localStorage["user5"];
    document.getElementById("user5").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user5").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn5").addEventListener("click", function () {
    var user = document.getElementById("user5").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user5", user);
    alert("your task has been updated");
    console.log("click")
}, false);





if (localStorage["user6"]) {
    var user = localStorage["user6"];
    document.getElementById("user6").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user6").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn6").addEventListener("click", function () {
    var user = document.getElementById("user6").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user6", user);
    alert("your task has been updated");
    console.log("click")
}, false);



if (localStorage["user7"]) {
    var user = localStorage["user7"];
    document.getElementById("user7").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user7").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn7").addEventListener("click", function () {
    var user = document.getElementById("user7").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user7", user);
    alert("your task has been updated");
    console.log("click")
}, false);







if (localStorage["user8"]) {
    var user = localStorage["user8"];
    document.getElementById("user8").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user8").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn8").addEventListener("click", function () {
    var user = document.getElementById("user8").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user8", user);
    alert("your task has been updated");
    console.log("click")
}, false);



if (localStorage["user8"]) {
    var user = localStorage["user8"];
    document.getElementById("user8").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user8").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn8").addEventListener("click", function () {
    var user = document.getElementById("user8").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user8", user);
    alert("your task has been updated");
    console.log("click")
}, false);

if (localStorage["user9"]) {
    var user = localStorage["user9"];
    document.getElementById("user9").value = user;
    alert("you are already a user")
}
else {
    document.getElementById("user9").placeholder = "What will you be foing today";
    console.log("user no found in localStorage")
}
document.getElementById("saveBtn9").addEventListener("click", function () {
    var user = document.getElementById("user9").value;
    //localStorage["user"] = user ;
    localStorage.setItem("user9", user);
    alert("your task has been updated");
    console.log("click")
}, false);

let newArray = [];
let time = momment();
let timeFormat = "hh:mma"
let eightStart = moment('8:00am',timeFormat)
let eightEnd = moment('8:59am',timeFormat)
let nineStart = moment('9:00am',timeFormat)
let nineEnd = moment('9:59am',timeFormat)
let tenStart = moment('10:00am',timeFormat)
let tenEnd = moment('10:59am',timeFormat)
let elevenStart = moment('11:00am',timeFormat)
let elevenend = moment('11:59am',timeFormat)
let twelveStart = moment('12:00am',timeFormat)
let oneStart = moment('1:00pm',timeFormat)
let oneEnd = moment('1:59pm',timeFormat)
let twoStart = moment('2:00pm',timeFormat)
let twoEnd = moment('2:59pm',timeFormat)
let threeStart = moment('3:00pm',timeFormat)
let threeEnd = moment('3:59pm',timeFormat)
let fourStart = moment('4:00pm',timeFormat)
let fourEnd = moment('4:59pm',timeFormat)
let fiveStart = moment('5:00pm',timeFormat)
let fiveEnd = moment('5:59pm',timeFormat)

setInterval(function(){
    checkTime();
},1000);


// iso string
// m = moment("2020/08/18 2:32PM", "DD/MM/YYYY");

// the dates are in the log
// console.log(m.year());
// console.log(m.toString());;
// console.log(m.toISOString());
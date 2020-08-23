$(document).ready(function () {


    // curent date + time
    // const m = moment();
    // const m2 = moment()
    //  const now = new Date(year, month, day);
    // document.getElementById('test').innerHTML = date;
    var NowMoment = moment();
    var eDisplayMoment = document.getElementById('test');
    eDisplayMoment.innerHTML = NowMoment.format('M-D-YYYY');

    // Target an element using moment 

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

    function wawa(thiswillsave, funbox, keyName) {
        $(thiswillsave).on("click", function () {
            // get text from wawa 
            var textarea = $(funbox).val();
            // text area is saved in local storage
            localStorage.setItem(keyName, textarea)
        })
        // data is retreved and displayed in textarea
        var save = localStorage.getItem(keyName)
        $(funbox).val(save);
    }
    // wawa is pulling text/saveBtn activates/user-... is targeted for data... insertion
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


var textareas = $(".form-control")
console.log(textareas)

for (var i = 0; i < textareas.length; i++){ 

var currentTextarea = $(textareas[i])

let textareahour = currentTextarea.attr("id");

let currenthour = NowMoment.format('H')



if (currenthour > parseInt(textareahour)){
    currentTextarea.addClass("past")
} else if (currenthour == parseInt(textareahour)){
    currentTextarea.addClass("present")
} else if (currenthour < parseInt(textareahour)){
    currentTextarea.addClass("future")
}

// currentTextarea.addClass("present")
// currentTextarea.addClass("Fut")

}

});




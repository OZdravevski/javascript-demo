console.log(`Are we live?!?`);

// $(document).ready(function() {

// let button = $("#getData");
// let myObject = {
//     trainer : "Kristina",
//     assistant: "Natasha",
//     students: [
//         "Jana",
//         "Nikola",
//         "Ivan",
//         "Sanja",
//         "Aleksandar",
//         "Ceca"
//     ],
//     academy: "Code",
//     course: "JS basic"
// };

//     // JSON.stringify converts JS object to JSON
//     let jsonObject = JSON.stringify(myObject);
//     console.log(jsonObject);

//     // JSON.parse converts JSON object to JS object
//     let backToJsObject = JSON.parse(jsonObject);
//     console.log(backToJsObject);



//     //AJAX  calls
//     button.click(function(){
//         const urlToGetData = "https://jsonplaceholder.typicode.com/users"
        
        
//         let dataArray = [];
        
        
//         $.ajax({
//             url: urlToGetData,
//             success: function(result){
//                 // the result is always JS object; it is automatically converted!!!
//                 console.log('Success!');
//             },
//             error: function(){
//                 console.error('Error occured!');
//             }
//         })
//         .done(function(data) {
//             for(let user of data){
//                 $("#userList").append(`<li>${user.username} - ${user.email}</li>`);
//             }
//         })

//     });

    // Exercise01

// });

//TASK 01
//inputs
let input01 = document.getElementsByClassName("#input01");
let input02 = document.getElementsByClassName("#input02");
// buttons
let btn01 = document.getElementById("#buttonSum");
let btn02 = document.getElementById("#buttonDif");
let btn03 = document.getElementById("#buttonMulti");
let btn04 = document.getElementById("#buttonDiv");
let btn05 = document.getElementById("#buttonPow");
// paragraph for result
let resultPar = document.getElementById("result");

// functions
buttonSum.addEventListener('click', function(){
    let sum = parseInt(input01.value) + parseInt(input02.value);
    resultPar.innerText = `The sum of numbers is ${sum}`;
    input01.value = "";
    input02.value = "";
});

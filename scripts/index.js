// function getFortune(url, maybe put callback function here?) {
// let request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", 'http://localhost:3000/http://yerkee.com/api/fortune.txt', true); // true for asynchronous 
//     xmlHttp.send(null);

    // let data = JSON.parse(this.responseText);
    // document.querySelector("[data-output]").innerHTML = data.fortune;
    // };
// }

// let request = new XMLHttpRequest();

// let buttonClick = document.querySelector("[data-input]").addEventListener("click", function () {
//     // let request = new XMLHttpRequest();
//     let data = JSON.parse(request.responseText);
//     document.querySelector("[data-output]").innerHTML = data.fortune;
// });

// request.open('GET', 'http://localhost:3000/http://yerkee.com/api/fortune.txt', true);

// request.send();

fetch('http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune.txt')
    .then(function (response) {
        return response.json();
    })
    .then(function (actualData) {
        console.log(actualData)
        let buttonClick = document.querySelector("[data-input]").addEventListener("click", function () {
            // let request = new XMLHttpRequest();
            // let data = JSON.parse(request.responseText);
            document.querySelector("[data-output]").innerHTML = actualData;
        });

    });
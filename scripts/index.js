// function getFortune(url, button) {
// let request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.send(null);

    // let data = JSON.parse(this.responseText);
    // document.querySelector("[data-output]").innerHTML = data.fortune;
    // };
// }

let request = new XMLHttpRequest();
    let button = document.querySelector("[data-input]").addEventListener("click", function () {
        // let buttonRequest = new XMLHttpRequest();
        let data = JSON.parse(request.responseText);
        document.querySelector("[data-output]").innerHTML = data.fortune;
    });

request.open('GET', 'http://localhost:3000/http://yerkee.com/api/fortune.txt', true);

request.send();

let request = new XMLHttpRequest();

request.onLoad = function () {
    // console.log(response)
    let data = JSON.parse(this.responseText);
    document.querySelectorAll("[data-output]").innerHTML = data.fortune;
    console.log(data)

//     if (request.status >= 200 && request.status < 400) {
//     data.forEach(function (fortune) {
//         console.log(response);
//     });
// } else {
//     console.log('error');
// }
}

// let fortuneDiv = document.createElement('div')
// fortuneDiv.textContent = request
request.open('GET', 'http://yerkee.com/api/fortune/all', true);

request.send();
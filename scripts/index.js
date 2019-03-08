let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    // console.log(response)
    if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    document.querySelector("[data-output]").innerHTML = data.fortune;
    console.log(data)

//     if (request.status >= 200 && request.status < 400) {
//     data.forEach(function (fortune) {
//         console.log(response);
//     });
// } else {
//     console.log('error');
    }
}

// let fortuneDiv = document.createElement('div')
// fortuneDiv.textContent = request
request.open('GET', 'http://localhost:3001/http://yerkee.com/api/fortune.txt', true);

request.send();
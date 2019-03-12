let button = document.querySelector("[data-input");
let outputElement = document.querySelector("[data-output")
let url = 'http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune.txt';
let fortunesArray = []
let counter = 0

function getInfo(url) {
    fetch('http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune.txt')
    .then(function (response) {
        return response.json();
    })
    .then(function (actualData) {
        outputElement.textContent = actualData.fortune
        fortunesArray.push(actualData.fortune)
        counter += 1
    });
};

// function getPrev(fortunesArray, counter) {
//     outputElement.textContent = fortunesArray[counter -1]
// }

button.addEventListener('click', getInfo)
// prevButton.addEventListener('click', getPrev)
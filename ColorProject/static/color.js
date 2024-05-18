const colorBox = document.getElementById("colorBox");
let httpRequest;

let color;

colorBox.addEventListener("load", getColor);
let intervalId = setInterval(getColor, 100);

function getColor() {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "/color");
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = this.responseText;
            let obj = JSON.parse(json);
            color = obj.color;
            colorBox.style.backgroundColor = color;
        }
    }
    httpRequest.send();
}
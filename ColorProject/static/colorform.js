let colorForm = document.getElementById("colorForm");

colorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setColor(document.getElementById("color").value);
});

function setColor(color) {
    console.log(color);
    httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "/color");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    let json = JSON.stringify({
        'color': color
    });
    
    console.log(json);
    httpRequest.send(json);
    document.getElementById("color").value = "";
}
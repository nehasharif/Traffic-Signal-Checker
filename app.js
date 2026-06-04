function resetLights() {
    document.getElementById("red").style.background = "#374151";
    document.getElementById("yellow").style.background = "#374151";
    document.getElementById("green").style.background = "#374151";
}

function checkSignal() {

    let color = document.getElementById("color").value.toLowerCase();
    let message = document.getElementById("message");

    resetLights();

    if (color === "red") {
        document.getElementById("red").style.background = "red";
        message.innerText = "STOP 🚫";
    }
    else if (color === "yellow") {
        document.getElementById("yellow").style.background = "yellow";
        message.innerText = "READY ⚠️";
    }
    else if (color === "green") {
        document.getElementById("green").style.background = "limegreen";
        message.innerText = "GO 🚗";
    }
    else {
        message.innerText = "Invalid Input ❌";
    }
}
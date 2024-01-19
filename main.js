let adviceId = document.querySelector(".advice-id span");
let adviceText = document.querySelector(".advice-text");
let diceBtn = document.querySelector(".dice");

const myTest = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onloadstart = () => {
        diceBtn.disable;
        diceBtn.style.backgroundColor = "hsl(193, 38%, 86%)";
        // diceBtn.style.boxShadow = "0 0 2rem hsl(193, 38%, 86%)";
    }

    xhttp.onload = () => {
        adviceId.innerHTML = JSON.parse(xhttp.responseText).slip.id;
        adviceText.innerHTML = `"${JSON.parse(xhttp.responseText).slip.advice}"`;
    }

    xhttp.onloadend = () => {
        diceBtn.enable;
        diceBtn.style.backgroundColor = "";
    }

    xhttp.open("GET", "https://api.adviceslip.com/advice");
    xhttp.send()
}

myTest();

diceBtn.addEventListener("click", myTest)
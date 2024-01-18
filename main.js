console.log("Hello, world!");

const myTest = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onloadstart = () => {
        console.log("loading...")
    }
    
    xhttp.onload = () => {
        document.write(JSON.parse(xhttp.responseText).slip.advice)
        console.log(xhttp)
    }

    xhttp.onloadend = () => {
        console.log("done!")
    }


    xhttp.open("GET", "https://api.adviceslip.com/advice");
    xhttp.send()
}

myTest();
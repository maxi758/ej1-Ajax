const btnShow = document.getElementById("btnShow");
const imgPicture = document.getElementById("image");
const h1Title = document.getElementById("title");
const h3Date = document.getElementById("date");
const inputDate = document.getElementById("inputDate")
const pExplntn = document.getElementById("explanation");

btnShow.addEventListener("click", function () {
// Enviar un request GET a https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// y recibir la respuesta
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        const response = JSON.parse(xhr.responseText);
        
        imgPicture.src = response.url;
        h1Title.textContent = response.title;
        h3Date.textContent = response.date.split('-').reverse().join('-');
        pExplntn.textContent = response.explanation;

    });

    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+inputDate.value);
    //console.log(xhr.date);
    xhr.send();
});
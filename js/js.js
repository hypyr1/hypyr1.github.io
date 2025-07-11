body.onload = function () {

    const url = window.location.href;
    const searchString = "es";


    if (url.indexOf(searchString) !== -1) {


document.getElementsByClassName('es')[0].setAttribute("style", "display:block;");


     //   const esbar = document.getElementById("esbar");
    //    const enbar = document.getElementById("enbar");
    //    const h1es = document.getElementById("h1es");
    //    const h1en = document.getElementById("h1en");
    //    const estext = document.getElementById("estext");
    //    const entext = document.getElementById("entext");


     //   esbar.style.display = "block";
     //   enbar.style.display = "none";
    //    h1es.style.display = "block";
    //    h1en.style.display = "none";
    //    estext.style.display = "block";
    //    entext.style.display = "none";

    }
};

function toggleVisibility(elementId) {



    if (elementId === 'es') {


        const esbar = document.getElementById("esbar");
        const enbar = document.getElementById("enbar");
        const h1es = document.getElementById("h1es");
        const h1en = document.getElementById("h1en");
        const estext = document.getElementById("estext");
        const entext = document.getElementById("entext");


        esbar.style.display = "block";
        enbar.style.display = "none";
        h1es.style.display = "block";
        h1en.style.display = "none";
        estext.style.display = "block";
        entext.style.display = "none";


    } else {

        esbar.style.display = "none";
        enbar.style.display = "block";
        h1es.style.display = "none";
        h1en.style.display = "block";
        estext.style.display = "none";
        entext.style.display = "block";


    }



}
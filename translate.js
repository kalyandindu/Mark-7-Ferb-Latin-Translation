var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")
var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json";

function appendInputTextToUrl(text){
    return serverUrl + "?text=" + text;
}

function errorHandler(error){   
    console.log("Error:" + error);
    alert("Server is not responding, Please try after sometime");
}   

function clickFunction(){
    fetch(appendInputTextToUrl(inputText.value)).then(response => response.json()).then(json => {outputText.innerText=json.contents.translated}).catch(errorHandler);
}

btnTranslate.addEventListener("click", clickFunction);




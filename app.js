var btnTranslate = document.querySelector("#btn-translation");
var btnInput = document.querySelector("#txt-input");
var btnOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/german-accent.json"


function getTranslate(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("something wrong");
}

function clickHandler(){
    var inputText = btnInput.value;
    fetch(getTranslate(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedtext = json.contents.translated;
            btnOutput.innerText = translatedtext;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click" ,clickHandler)
var textInput = document.querySelector("#txt-input");
var btnTranslation = document.querySelector("#btn-translation");
var textOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/german-accent.json"

function getTranslation (text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("something went wrong");

}

function clickHandler(){
    var inputText = textInput.value;
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            textOutput.innerText = translatedtext;
    })
    .catch(errorHandler)

};
btnTranslation.addEventListener("click", clickHandler);
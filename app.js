
//var pr= prompt("Tell me your name:");
//var ar= alert("Welcome "+ pr);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorMessage = document.querySelector("#error-msg");

var serverURL = "https://api.funtranslations.com/translate/doge.json"

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText
}

function clickHandler() {
    
    var inputText = textInput.value; // taking input

    console.log("clicked!!");


    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
}

function errorHandler(){
    errorMessage.innerText = "Server is not working properlytry after sometime"

}
btnTranslate.addEventListener("click", clickHandler);






// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with server! try again after some time")
// }
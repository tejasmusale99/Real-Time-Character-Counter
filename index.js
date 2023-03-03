const inputText=document.getElementById("textarea")
const totalCounter=document.getElementById("total-counter") 
const remainingCounter=document.getElementById("remaining-counter")

function inputHandler(){
   totalCounter.innerText=inputText.value.length
  remainingCounter.innerText=inputText.getAttribute("maxLength") - inputText.value.length
}
inputText.addEventListener("keyup",inputHandler)





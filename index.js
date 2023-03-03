const inputText=document.getElementById("textarea")
// const totalCounter=document.getElementById("total-counter")
// const remainingCounter=document.getElementById("remaining-counter")
function inputHandler(){
    const inputValue=inputText.value.length
    console.clear()
    console.log(inputValue)
}
inputText.addEventListener("input",inputHandler)





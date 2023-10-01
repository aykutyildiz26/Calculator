var firstNumber = document.querySelector("#first-number")
var secondNumber = document.querySelector("#second-number")
var result = document.querySelector("#result")

const addBtn = document.querySelector("#add-btn")
const subtractBtn = document.querySelector("#subtract-btn")
const divideBtn = document.querySelector("#divide-btn")
const multiplyBtn = document.querySelector("#multiply-btn")

const buttonsList = [addBtn, subtractBtn, divideBtn, multiplyBtn]
const inputsList = [firstNumber, secondNumber]

setDisable()

function checkRender(){
    for(var i = 0; i < inputsList.length; i++){
        inputsList[i].addEventListener("change", function(){
            if(firstNumber.value == "" || secondNumber.value == ""){
                setDisable()
            }
            else{
                setEnable()
            }
        })
    }
}

checkRender()

function getInput(){
    firstNumber = parseInt(document.querySelector("#first-number").value)
    secondNumber = parseInt(document.querySelector("#second-number").value)
}

function setDisable(){
    result.textContent = "Please enter number"
    for(var i = 0; i < buttonsList.length; i++){
        buttonsList[i].setAttribute('disabled', 'disabled')
    }
}

function setEnable(){
    for(var k = 0; k < buttonsList.length; k++){
        buttonsList[k].removeAttribute('disabled')
    }
}

function add(){
    getInput()
    if(isNaN(firstNumber + secondNumber)){
        setDisable()
    }
    else{
        result.textContent = firstNumber + secondNumber
    }
}

function subtract(){
    getInput();
    if(isNaN(firstNumber - secondNumber)){
        setDisable()
    }
    else{
        result.textContent = Math.abs(firstNumber - secondNumber) 
    }
}

function divide(){
    getInput();
    if(isNaN(firstNumber / secondNumber)){
        setDisable()
    }
    else{
        result.textContent = firstNumber / secondNumber
    }

}

function multiply(){
    getInput();
    if(isNaN(firstNumber * secondNumber)){
        setDisable()
    }else{
        result.textContent = firstNumber * secondNumber
    }

}
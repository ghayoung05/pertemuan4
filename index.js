const btn0 = document.querySelector (".btn-0")
const btn1 = document.querySelector (".btn-1")
const btn2 = document.querySelector (".btn-2")
const btn3 = document.querySelector (".btn-3")
const btn4 = document.querySelector (".btn-4")
const btn5 = document.querySelector (".btn-5")
const btn6 = document.querySelector (".btn-6")
const btn7 = document.querySelector (".btn-7")
const btn8 = document.querySelector (".btn-8")
const btn9 = document.querySelector (".btn-9")
const btnAC = document.querySelector (".btn-ac")
const btnDel = document.querySelector (".btn-del")
const btnMod = document.querySelector (".btn-mod")
const btnDiv = document.querySelector (".btn-div")
const btnTimes = document.querySelector (".btn-times")
const btnMin = document.querySelector (".btn-min")
const btnPlus = document.querySelector(".btn-plus")
const btnEqual = document.querySelector (".btn-equal")
const btnFloat = document.querySelector (".btn-float")


const resultText = document.querySelector (".result-text")

btn0.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        resultText.append("0")
    }
}
btn1.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "1"
    }else{
        resultText.append("1")
    }
}
btn2.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "2"
    }else{
        resultText.append("2")
    }
}
btn3.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "3"
    }else{
        resultText.append("3")
    }
}
btn4.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "4"
    }else{
        resultText.append("4")
    }
}
btn5.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "5"
    }else{
        resultText.append("5")
    }
}
btn6.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "6"
    }else{
        resultText.append("6")
    }
}
btn7.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "7"
    }else{
        resultText.append("7")
    }
}
btn8.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "8"
    }else{
        resultText.append("8")
    }
}
btn9.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "9"
    }else{
        resultText.append("9")
    }
}

btnDel.onclick = () => {
    resultText.innerHTML = "0"
}
btnAC.onclick = () => {
    resultText.innerHTML = "0"
}

btnPlus.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        resultText.append(" + ")
    }
}
btnMin.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        resultText.append(" - ")
    }
}
btnTimes.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        resultText.append(" x ")
    }
}
btnDiv.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        resultText.append(" : ")
    }
}

btnEqual.onclick = () => {
    if(resultText.innerHTML == 0){
        resultText.innerHTML = "0"
    }else{
        const num1 = parseInt(resultText.innerHTML.split(" ")[0])
        const opt = resultText.innerHTML.split(" ")[1]
        const num2 = parseInt(resultText.innerHTML.split(" ")[2])
        let result = 0

        switch(opt) {
            case "+":
                result += num1 + num2
                break
            case "-":
                result += num1 - num2
                break
            case "x":
                result += num1 * num2
                break
            case ":":
                result += num1 / num2
                break
            case "%":
                result += num1 
        }
        // console.log(result)
        resultText.innerHTML = result
    }
}
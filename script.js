// This is a simple JavaScript program that demonstrates the use of variables, functions, and console logging.
// It defines a variable, a function that modifies the variable, and a function that logs the variable to the console.


// function testingTesting() {
//     console.log(showAnswer);
// }

// testingTesting() //calling a function


function sum() {
    if (num1.value === "" || num2.value ==="") {
        showAnswer.innerHTML = "Please enter both numbers!";
        showAnswer.style.backgroundColor = "red"
        showAnswer.style.color = "white"
        showAnswer.style.paddingTop = "13px"
        showAnswer.style.transform = "scaleX(1.0)"
        showAnswer.style.animation = "fadeInAnswer 0.5s";
        setTimeout(() => { showAnswer.style.animation = ""; }, 500);
        return;
    }else{
        showAnswer.style.backgroundColor = "blue"
        showAnswer.style.color = "white"
    }
    var firstNumber = Number(num1.value)
    var secondNumber = Number(num2.value)
    var sum = firstNumber + secondNumber
    var realAnswer = "The answer is " + sum

    showAnswer.innerHTML = realAnswer
    showAnswer.style.paddingTop = "13px"
    showAnswer.style.animation = "fadeInAnswer 0.5s";
    setTimeout(() => { showAnswer.style.animation = ""; }, 500);
}

function subtract() {
        if (num1.value === "" || num2.value ==="") {
        showAnswer.innerHTML = "Please enter both numbers!";
        showAnswer.style.backgroundColor = "red"
        showAnswer.style.color = "white"
        showAnswer.style.paddingTop = "13px"
        showAnswer.style.transform = "scaleX(1.0)"
        showAnswer.style.animation = "fadeInAnswer 0.5s";
        setTimeout(() => { showAnswer.style.animation = ""; }, 500);
        return;
    }else{
        showAnswer.style.backgroundColor = "blue"
        showAnswer.style.color = "white"
    }
    var firstNumber = (num1.value)
    var secondNumber = (num2.value)
    var subtract = firstNumber - secondNumber
    var realAnswer = "The answer is " + subtract

    showAnswer.innerHTML = realAnswer
    showAnswer.style.paddingTop = "13px"
    showAnswer.style.animation = "fadeInAnswer 0.5s";
    setTimeout(() => { showAnswer.style.animation = ""; }, 500);



}

function divide() {
        if (num1.value === "" || num2.value ==="") {
        showAnswer.innerHTML = "Please enter both numbers!";
        showAnswer.style.backgroundColor = "red"
        showAnswer.style.color = "white"
        showAnswer.style.paddingTop = "13px"
        showAnswer.style.transform = "scaleX(1.0)"
        showAnswer.style.animation = "fadeInAnswer 0.5s";
        setTimeout(() => { showAnswer.style.animation = ""; }, 500);
        return;
    }else{
        showAnswer.style.backgroundColor = "blue"
        showAnswer.style.color = "white"
    }
    var firstNumber = num1.value
    var secondNumber = num2.value
    var quotient = firstNumber / secondNumber
    var realAnswer = "The answer is " + quotient

    showAnswer.innerHTML = realAnswer
    showAnswer.style.paddingBottom = "50px"
    showAnswer.style.animation = "fadeInAnswer 0.5s";
    setTimeout(() => { showAnswer.style.animation = ""; }, 500);
}

    function product() {
        if (num1.value === "" || num2.value ==="") {
        showAnswer.innerHTML = "Please enter both numbers!";
        showAnswer.style.backgroundColor = "red"
        showAnswer.style.color = "white"
        showAnswer.style.paddingTop = "13px"
        showAnswer.style.transform = "scaleX(1.0)"
        showAnswer.style.animation = "fadeInAnswer 0.5s";
        setTimeout(() => { showAnswer.style.animation = ""; }, 500);
        return;
    }else{
        showAnswer.style.backgroundColor = "blue"
        showAnswer.style.color = "white"
    }
    var firstNumber = (num1.value)
    var secondNumber = (num2.value)
    var multiplication = firstNumber * secondNumber
    var realAnswer = "The answer is " + multiplication

    showAnswer.innerHTML = realAnswer
    showAnswer.style.paddingTop = "13px"
    showAnswer.style.animation = "fadeInAnswer 0.5s";
    setTimeout(() => { showAnswer.style.animation = ""; }, 500);


}


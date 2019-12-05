const myProblem = () => {
    var answer = document.getElementById("slope").value;
    if (answer == 0.75) {
        return "Good Job!";
    } else
        return "Try Again";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};

const myProblem2 = () => {
    var answer = document.getElementById("slope2").value;
    if (answer == -0.6) {
        return "Good Job!";
    } else
        return "Try Again";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
};

const myProblem3 = () => {
    var answer = document.getElementById("slope3").value;
    if (answer == -0.5) {
        return "Good Job!";
    } else
        return "Try Again";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
};
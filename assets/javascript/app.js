let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let timerId;
let questionTimer = 30;

let seconds = 0;

$("#startButton").on("click", function () {

    $("#startButton").css("display", "none");
    $(".answers").css("display", "inherit");
    startQuiz();




})



function startQuiz() {

    clearAnswers();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;

    timerId = setInterval(questionTwo, 1000);
    setInterval(questionTwo, 1000);
    timerId = setInterval(questionOne, 1000);
    setInterval(questionOne, 1000);


}

function countDown() {

    questionTimer--;

}



function questionOne() {


    clearAnswers();





    setInterval(countDown, 3000);


    $("#timer").text(questionTimer);




    $("#question").text("Who is the third Robin?");
    $("#answer1").text("Damien Wayne");
    $("#answer2").text("Tim Drake");
    $("#answer3").text("Dick Greyson");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {
        clearInterval(timerId);

        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");


    })

    $("#answer2").on("click", function () { })
    $("#answer3").on("click", function () { })
    $("#answer4").on("click", function () { })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}


function questionTwo() {


    $("#timer").text(questionTimer);
    questionTimer--;
    clearAnswers();

    $("#question").text("Who played Batman in the Nolan films?");
    $("#answer1").text("Patrick Patman");
    $("#answer2").text("Christian Bale");
    $("#answer3").text("Arthur Fleck");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {
        clearInterval(timerId);

        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");


    })

    $("#answer2").on("click", function () { })
    $("#answer3").on("click", function () { })
    $("#answer4").on("click", function () { })






}

function questionThree() {


    $("#question").text("Who played Batman in the Nolan films?");
    $("#answer1").text("Patrick Patman");
    $("#answer2").text("Christian Bale");
    $("#answer3").text("Arthur Fleck");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {

        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");


    })

    $("#answer2").on("click", function () { })
    $("#answer3").on("click", function () { })
    $("#answer4").on("click", function () { })






}

function quizResults() {

    $("#game").text(`Number of correct answers: ${correctAnswers}`);
    $("#game").text(`Number of incorrect answers: ${incorrectAnswers}`);
    $("#game").text(`Number of unanswered questions: ${unanswered}`);

    $("#startOver").css("display", "inherit");


}

function clearAnswers() {


    $("#question").text("");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");





}


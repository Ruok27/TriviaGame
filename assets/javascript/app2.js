let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let timerId;
let questionTimer = 10;




$("#startButton").on("click", function () {



    $("#startButton").css("display", "none");
    $(".answers").css("display", "inherit");
    startQuiz();
    






})



function startQuiz() {

    $(".answers").css("display", "none");
    clearAnswers();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;


    questionOne();



}



function questionOne() {

    
    $(".answers").css("display", "inherit");

    

        $("#timer").text(questionTimer);
       setInterval(countDown,3000);



        $("#question").text("Who is the third Robin?");
        $("#answer1").text("Damien Wayne");
        $("#answer2").text("Tim Drake");
        $("#answer3").text("Dick Greyson");
        $("#answer4").text("Jason Todd");


        $("#answer1").on("click", function () {
            clearInterval(timerId);

            incorrectAnswers++;
            $(".answers").css("display", "none");
            $("#question").text(" ");
            $(".game").css("display", "none");


        })

        $("#answer2").on("click", function () {


            clearInterval(timerId);

            incorrectAnswers++;
            $(".answers").css("display", "none");
            $("#question").text(" ");
            $(".game").css("display", "none");



        })


        $("#answer3").on("click", function () {


            clearInterval(timerId);

            incorrectAnswers++;
            $(".answers").css("display", "none");
            $("#question").text(" ");
            $(".game").css("display", "none");

        })
        $("#answer4").on("click", function () {


            clearInterval(timerId);

            incorrectAnswers++;
            $(".answers").css("display", "none");
            $("#question").text(" ");
            $(".game").css("display", "none");

        })


    


    if (questionTimer < 1) {

        break;

        clearInterval(timerId);
        return unanswered++;

    }



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


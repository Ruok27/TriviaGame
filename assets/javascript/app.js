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

    clearAnswers();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;


    questionOne();


}





function questionOne() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: Tim Drake");
            $("#question").append($('<img>',{src:'assets/images/tim.gif'}));
            


            setTimeout(questionTwo, 5000);




        }



    }, 1000);





    $("#question").text("Who is the third Robin?");
    $("#answer1").text("Damien Wayne");
    $("#answer2").text("Tim Drake");
    $("#answer3").text("Dick Greyson");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Incorrect!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>',{src:'assets/images/tim.gif'}));


        setTimeout(questionTwo, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>',{src:'assets/images/tim.gif'}));

        


        setTimeout(questionTwo, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Incorrect!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>',{src:'assets/images/tim.gif'}));


        setTimeout(questionTwo, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Incorrect!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>',{src:'assets/images/tim.gif'}));


        setTimeout(questionTwo, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}


function questionTwo() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!")


            setTimeout(questionThree, 5000);




        }



    }, 1000);





    $("#question").text("Who played Batman in the Nolan films?");
    $("#answer1").text("Patrick Patman");
    $("#answer2").text("Christian Bale");
    $("#answer3").text("Arthur Fleck");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {
        clearInterval(intervalID);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $(".game").text("Incorrect!")


        setInterval(questionThree), 1000;


    })

    $("#answer2").on("click", function () { })
    $("#answer3").on("click", function () { })
    $("#answer4").on("click", function () { })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}




function questionThree() {

    clearAnswers()


    $("#question").text("What batman villain controls plants?");
    $("#answer1").text("Joker");
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


    questionTimer = 10;
    $(".answers").css("display", "inherit");
    $("#question").text("");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");





}


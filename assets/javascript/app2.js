function questionThree() {

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
            $("#question").append(" Correct Answer: Helena Bertinelli");
            $("#question").append($('<img>', { src: 'assets/images/huntress.gif' }));



            setTimeout(questionFour, 5000);




        }



    }, 1000);





    $("#question").text("What is the Huntresses’ real name?");
    $("#answer1").text("Helena Bertinelli");
    $("#answer2").text("Emma Frost");
    $("#answer3").text("Shana Blane");
    $("#answer4").text("Barbara Gordon");


    $("#answer1").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'assets/images/huntress.gif' }));


        setTimeout(questionFour, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'assets/images/huntress.gif' }));




        setTimeout(questionFour, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'assets/images/huntress.gif' }));




        setTimeout(questionFour, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'assets/images/huntress.gif' }));




        setTimeout(questionFour, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}
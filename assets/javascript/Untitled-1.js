function questionFour() {

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
            $("#question").append(" Correct Answer: Umbrella");
            $("#question").append($('<img>', { src: 'assets/images/pen.gif' }));



            setTimeout(questionFive, 5000);




        }



    }, 1000);





    $("#question").text("What is the Penguin's signature item?");
    $("#answer1").text("Fish");
    $("#answer2").text("Flippers");
    $("#answer3").text("Umbrella ");
    $("#answer4").text("Clown car");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'assets/images/pen.gif' }));


        setTimeout(questionFive, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'assets/images/pen.gif' }));



        setTimeout(questionFive, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'assets/images/pen.gif' }));


        setTimeout(questionFive, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'assets/images/pen.gif' }));


        setTimeout(questionFive, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionFive() {

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



            setTimeout(questionSix, 5000);




        }



    }, 1000);





    $("#question").text("What is Huntress’s’ real name?");
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


        setTimeout(questionSix, 5000);





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



        setTimeout(questionSix, 5000);


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



        setTimeout(questionSix, 5000);




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



        setTimeout(questionSix, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionSix() {

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
            $("#question").append(" Correct Answer: Joker");
            $("#question").append($('<img>', { src: 'assets/images/redHood.jpg' }));



            setTimeout(questionSeven, 5000);




        }



    }, 1000);





    $("#question").text("Which Batman Villain originally went by the moniker” Red Hood”?");
    $("#answer1").text("Bane");
    $("#answer2").text("Scarecrow");
    $("#answer3").text("Amazo");
    $("#answer4").text("Joker");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Joker");
        $("#question").append($('<img>', { src: 'assets/images/redHood.jpg' }));

        setTimeout(questionSeven, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Joker");
        $("#question").append($('<img>', { src: 'assets/images/redHood.jpg' }));

        setTimeout(questionSeven, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Joker");
        $("#question").append($('<img>', { src: 'assets/images/redHood.jpg' }));

        setTimeout(questionSeven, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'assets/images/redHood.jpg' }));


        setTimeout(questionSeven, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionSeven() {

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
            $("#question").append(" Correct Answer: Palm Tree");
            $("#question").append($('<img>', { src: 'assets/images/Batcave.jpg' }));



            setTimeout(questionEight, 5000);




        }



    }, 1000);





    $("#question").text("Which of these things is definitely not in the bat cave?");
    $("#answer1").text("Giant Penny");
    $("#answer2").text("T-Rex");
    $("#answer3").text("Display Case");
    $("#answer4").text("Palm Tree");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Palm Tree");
        $("#question").append($('<img>', { src: 'assets/images/Batcave.jpg' }));




        setTimeout(questionEight, 5000);






    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Palm Tree");
        $("#question").append($('<img>', { src: 'assets/images/Batcave.jpg' }));




        setTimeout(questionEight, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Palm Tree");
        $("#question").append($('<img>', { src: 'assets/images/Batcave.jpg' }));




        setTimeout(questionEight, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");

        $("#question").append($('<img>', { src: 'assets/images/Batcave.jpg' }));




        setTimeout(questionEight, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionEight() {

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
            $("#question").append(" Correct Answer: Hugo Strange");
            $("#question").append($('<img>', { src: 'assets/images/hugo.gif' }));



            setTimeout(questionNine, 5000);




        }



    }, 1000);





    $("#question").text("Out of this list, who was Batman’s first enduring villain to debut in Detective Comics #36");
    $("#answer1").text("Two Face");
    $("#answer2").text("Joker");
    $("#answer3").text("Hugo Strange");
    $("#answer4").text("Catwoman");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hugo Strange");
        $("#question").append($('<img>', { src: 'assets/images/hugo.gif' }));



        setTimeout(questionNine, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hugo Strange");
        $("#question").append($('<img>', { src: 'assets/images/hugo.gif' }));



        setTimeout(questionNine, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'assets/images/hugo.gif' }));



        setTimeout(questionNine, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hugo Strange");
        $("#question").append($('<img>', { src: 'assets/images/hugo.gif' }));



        setTimeout(questionNine, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionNine() {

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
            $("#question").append(" Correct Answer: Hush");
            $("#question").append($('<img>', { src: 'assets/images/hush.gif' }));



            setTimeout(questionTen, 5000);




        }



    }, 1000);





    $("#question").text("Which Batman Villain has ties to Bruce Wayne’s childhood?");
    $("#answer1").text("Bane");
    $("#answer2").text("Two Face");
    $("#answer3").text("Hush");
    $("#answer4").text("Penguin");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hush");
        $("#question").append($('<img>', { src: 'assets/images/hush.gif' }));



        setTimeout(questionTen, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hush");
        $("#question").append($('<img>', { src: 'assets/images/hush.gif' }));



        setTimeout(questionTen, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");

        $("#question").append($('<img>', { src: 'assets/images/hush.gif' }));



        setTimeout(questionTen, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Hush");
        $("#question").append($('<img>', { src: 'assets/images/hush.gif' }));



        setTimeout(questionTen, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}



function questionTen() {

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
            $("#question").append(" Correct Answer: His parents died in front of him as a child");
            $("#question").append($('<img>', { src: 'assets/images/parents.gif' }));



            setTimeout(quizResults, 5000);




        }



    }, 1000);





    $("#question").text("Bruce Wayne became Batman because ____");
    $("#answer1").text("His Butler died");
    $("#answer2").text("The joker poisoned Gotham's water supply");
    $("#answer3").text("His parents died in front of him as a child ");
    $("#answer4").text("Commissioner Gordon told him to");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'assets/images/parents.gif' }));



        setTimeout(quizResults, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'assets/images/parents.gif' }));



        setTimeout(quizResults, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'assets/images/parents.gif' }));



        setTimeout(quizResults, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'assets/images/parents.gif' }));



        setTimeout(quizResults, 5000);





    })


    if (questionTimer < 1) {

        clearInterval(timerId);
        return unanswered++;

    }



}









function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "/14</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Elvis Presley je poznat kao?", ["Košarkaš", "Kralj rocka","Dj", "Bubnjar"], "Kralj rocka"),
    new Question("Bob Marley je bio državljanin?", ["Južne Afrike", "Irske", "Jamajke", "Hrvatske"], "Jamajke"),
    new Question("Kako su se prije zvali 'Najbolji Hrvatski tamburaši'?", ["Azra", "Slavonske lole","Psihomodopop", "Zlatni dukati"], "Zlatni dukati"),
    new Question("Tko je pjevao 'You Got It'?", ["Elvis Presley", "Toni Cetinski", "Madona", "Roy Orbison"], "Roy Orbison"),
    new Question("Pjesmu 'Fortunate Son' izvodi?", ["Lynyrd Skynyrd", "The Doors", "Creedence Clearwater Revival", "Guns N' Roses"], "Creedence Clearwater Revival"),
    new Question("Odakle dolazi poznata grupa 'Roxete '?", ["Švedska", "Australija", "Velika Britania", "Island"], "Švedska"),
    new Question("Eros Ramazzotti sa kojom pjevačicom pjeva 'Cose Della Vita'?", ["Céline Dion", "Rihanna", "Tina Turner", "Madonna"], "Tina Turner"),
    new Question("Grupa 'Prljavo kazalište' iz kojeg su zagrebačkog kvarta?", ["Trešnjevka", "Dubrava", "Sesvete", "Jarun"], "Dubrava"),
    new Question("Koje je godine grupa Neki to vole vruće izdala album 'Jeans generacija'?", ["1986", "Library", "1995", "2000"], "1986"),
    new Question("Pjesma 'The rockafeller skank' izvodi?", ["Elvis Presley", "Dj Rush", "FATBOY SLIM", "Abba"], "FATBOY SLIM"),
    new Question("Koja grupa izvodi 'Paradise City'?", ["Guns N' Roses ", "The Doors", "Creedence Clearwater Revival", "The Beatles"], "Guns N' Roses"),
    new Question("Brian Jones,Ian Stewart, Mick Jagger, Keith Richards, Bill Wyman i Charlie Watts su bili početni sastav koje poznate grupe?", ["The Rolling Stones", "The Doors", "The Beatles", "Led Zeppelin"], "The Rolling Stones"),
    new Question("John Lennon je bio član koje grupe?", ["The Rolling Stones", "Guns N' Roses", "Creedence Clearwater Revival", "The Beatles"], "The Beatles"),
    new Question("Tko izvodi pjesmu 'Always On My Mind'?", ["Phil Collins", "Elvis Presley ", "Bob Marley", "Roy Orbison"], "Elvis Presley ")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
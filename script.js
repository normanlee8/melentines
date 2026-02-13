const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const justKidding = document.querySelector("#jk");
const finalMessageScreen = document.getElementById("final-message");

let questionIndex = 0;

const questions = [
    {
        text: "Answer these questions to find out your Valentine!",
        answers: [
            { text: "Okay" },
            { text: "Start" },
            { text: "Begin" },
            { text: "Do it now!" },
        ]
    },
    {
        text: "What is your ideal Valentine's date?",
        answers: [
            { text: "A romantic candlelit dinner" },
            { text: "A cozy movie marathon at home" },
            { text: "Going on a fun adventure" },
            { text: "A picnic under the stars" }
        ]
    },
    {
        text: "What gift would you want on Valentine's day?",
        answers: [
            { text: "Flowers and candy" },
            { text: "A thoughtful handmade gift" },
            { text: "A relaxing spa day" },
            { text: "A surprise getaway" }
        ]
    },
    {
        text: "What is the most important quality in your Valentine?",
        answers: [
            { text: "A great sense of humor" },
            { text: "Unconditional loyalty" },
            { text: "Kindness and patience" },
            { text: "Emotional intelligence" }
        ]
    },
    {
        text: "What is something you want to do with your Valentine?",
        answers: [
            { text: "Go on a cute date night" },
            { text: "Binge-watch TV shows" },
            { text: "Cook dinner together" },
            { text: "Cuddle all day long" }
        ]
    },
    {
        text: "What is your favorite sweet treat?",
        answers: [
            { text: "Candy" },
            { text: "Ice Cream" },
            { text: "Boba" },
            { text: "Pastries" }
        ]
    },
    {
        text: "How do you feel about romantic gestures?",
        answers: [
            { text: "I love big, grand gestures!" },
            { text: "Small, thoughtful acts are best" },
            { text: "I prefer private, intimate moments" },
            { text: "Spontaneous surprises excite me" }
        ]
    },
    {
        text: "What do you value most in a relationship?",
        answers: [
            { text: "Trust and honesty" },
            { text: "Open communication" },
            { text: "Having fun together" },
            { text: "Supporting each other's dreams" }
        ]
    },
    {
        text: "What cheers you up?",
        answers: [
            { text: "Good food" },
            { text: "A nice hug" },
            { text: "Listening to music" },
            { text: "Retail therapy" }
        ]
    },
    {
        text: "",
        answers: [
            { text: "And finally:" }
        ]
    },
    {
        text: "Will you be my Valentine?",
        answers: [
            { text: "Yes!" },
            { text: "No" }
        ]
    }
];

justKidding.addEventListener("click", goToQuiz);

function goToQuiz() {
    startScreen.classList.add("hidden");
    justKidding.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    answerButtons.innerHTML = "";
    let currentQuestion = questions[questionIndex];
    questionText.innerText = currentQuestion.text;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        if (answer.text === "And finally:") {
            button.style.color = "pink";
            button.style.backgroundColor = "white";
            button.style.padding = "6rem";
            button.style.fontSize = "64px";
        }

        if (answer.text === "Yes!") {
            button.style.transition = "padding 0.3s ease, font-size 0.3s ease";  

            button.addEventListener("mouseover", () => {
                button.style.fontSize = "64px";
                button.style.paddingTop = "4rem"; 
                button.style.paddingBottom = "4rem";
            });

            button.addEventListener("mouseout", () => {
                button.style.fontSize = "";
                button.style.paddingTop = ""; 
                button.style.paddingBottom = "";
            });
        }

        if (answer.text === "No") {
            button.style.transition = "opacity 0.5s ease"
            button.addEventListener("mouseover", () => {
                button.style.opacity = "0";
                button.style.cursor = "default";
            });

            button.addEventListener("mouseout", () => {
                button.style.opacity = "1";
            });
        }
        else {
            button.addEventListener("click", selectAnswer);
        }
        
        answerButtons.appendChild(button);
    })
}

function selectAnswer() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    }
    else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultScreen.classList.add("heart");
}

const resetBtn = document.getElementById("reset-button");

resetBtn.addEventListener("click", () => {
    questionIndex = 0;

    startScreen.classList.remove("hidden");
    justKidding.classList.remove("hidden");

    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");

    finalMessageScreen.classList.add("hidden");
    finalMessageScreen.classList.remove("heart");

    resultScreen.classList.remove("heart");
});


function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = "❤️"; 
    heart.classList.add("rising-heart");

    heart.style.left = Math.random() * 100 + "vw";  
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.fontSize = Math.random() * 40 + 30 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

resultScreen.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    resultScreen.classList.remove("heart");

    finalMessageScreen.classList.remove("hidden");
    finalMessageScreen.classList.add("heart");
});
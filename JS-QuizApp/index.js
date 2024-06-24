const questions = [
	{
		question: "Which is largest animal in the world?",
		answers: [
			{
				text: "Shark",
				correct: false,
			},
			{
				text: "Blue whale",
				correct: true,
			},
			{
				text: "Elephant",
				correct: false,
			},
			{
				text: "Giraffe",
				correct: false,
			},
		],
	},
	{
		question: "Which is largest desert in the world?",
		answers: [
			{
				text: "Kalahari",
				correct: false,
			},
			{
				text: "Gobi",
				correct: true,
			},
			{
				text: "Sahara",
				correct: false,
			},
			{
				text: "Antarctica",
				correct: true,
			},
		],
	},
	{
		question: "Which is smallest continent in the world?",
		answers: [
			{
				text: "Asia",
				correct: false,
			},
			{
				text: "Australia",
				correct: true,
			},
			{
				text: "Arctic",
				correct: false,
			},
			{
				text: "Africa",
				correct: false,
			},
		],
	},
	{
		question: "Which is smallest country in the world?",
		answers: [
			{
				text: "Vatican City",
				correct: true,
			},
			{
				text: "Bhutan",
				correct: true,
			},
			{
				text: "Nepal",
				correct: false,
			},
			{
				text: "Shri Lanka",
				correct: false,
			},
		],
	},
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";

	showQuestion();
}

function showQuestion() {
	resetState();

	let currentQuestion = questions[currentQuestionIndex];
	let questionNumber = currentQuestionIndex + 1;
	questionElement.innerHTML = `${questionNumber} . ${currentQuestion.question}`;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.classList.add("btn");
		button.innerHTML = answer.text;
		answerButtons.appendChild(button);

		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}

		button.addEventListener("click", selectAnswer);
	});
}

function resetState() {
	nextButton.style.display = "none";

	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";

	if (isCorrect) {
		selectedBtn.classList.add("correct");
	} else {
		selectedBtn.classList.add("incorrect");
	}
}

startQuiz();

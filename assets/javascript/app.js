//Create the bank of questions and answers
var questionBank = [
	{
		question 	: "The DVC hotel at the Contemporary Resort is named:",
    	answer   	: 2,
	   	answerList  : ["Break Wall Tower", "Sandy Beach Tower", "Bay Lake Tower", "Beach Front Tower"],
	},
	
	{
		question 	: "EPCOT stands for:",
		answer   	: 2,
		answerList  : ["Envisioning Picturing Creating our Tomorrow", "Every Person Creates Our Tomorrow", "Experimental Prototype Community Of Tomrrow", "Entertaining People Creates Our Tomorrow"],
	},
	
	{
		question 	: "The name of the Hawiian-themed hotel is:",
		answer   	: 1,
		answerList  : ["Maui Sands", "Polynesian Village", "The Big Kahuna", "Ohana Hotel"],
	},
	
	{
		question 	: "What is the name of the Disney transportation service from the Orlando International Airport?",
		answer   	: 3,
		answerList  : ["Kindom Kars", "Disney Uber", "Disney's Mouskateer", "Disney's Magical Express"],
	},
	
	{
		question 	: "Which IS NOT a Walt Disney World attraction:",
		answer   	: 3,
		answerList 	: ["Splash Mountain", "Soarin'", "Monster's Inc. Laugh Floor", "The Big Dipper"], 
	},

];

//All of our vars for the game
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;

//Messages that will show based on the User's answer selection
var messages = {
	correct: "Right! You got that correct!",
	incorrect: "Uh, sorry.  That's not right!",
	endTime: "Oh no! You ran out of time!",
}

//Clicking the START button will initiate a new game
$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//Clicking the START OVER text (once the current game is complete) will initiate a new game
$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//Setting all of our function properties at 0 or empty - similar to a "Reset"
function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

//Clear the message and correct answer text, in order to move on and display the next question
function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	answered = true;
	
	//Text that shows what number question we are on
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+' of '+questionBank.length);
	//Displays the current question
	$('.question').html('<h2>' + questionBank[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(questionBank[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();

	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 10;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

//Page that shows up at the end, providing the user score and recap
function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var rightAnswerText = questionBank[currentQuestion].answerList[questionBank[currentQuestion].answer];
	var rightAnswerIndex = questionBank[currentQuestion].answer;

	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (questionBank.length-1)){
		setTimeout(scoreboard, 3000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 3000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
};
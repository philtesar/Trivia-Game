var questionBank = [
	{
		question : "The DVC hotel at the Contemporary Resort is named:",
    	answer   : 3,
	   	option0  : "Break Wall Tower",
	   	option1  : "Sandy Beach Tower",
	   	option2  : "Bay Lake Tower",
		option3  : "Beach Front Tower",
	},
	
	{
		question : "EPCOT stands for:",
		answer   : 2,
		option0  : "Envisioning Picturing Creating our Tomorrow",
		option1  : "Every Person Creates Our Tomorrow",
		option2  : "Experimental Prototype Community Of Tomrrow",
		option3  : "Entertaining People Creates Our Tomorrow",
	},
	
	{
		question : "The name of the Hawiian-themed hotel is:",
		answer   : 1,
		option0  : "Maui Sands",
		option1  : "Polynesian Village",
		option2  : "The Big Kahuna",
		option3  : "Ohana Hotel",
	},
	
	{
		question : "What is the name of the Disney transportation service from the Orlando International Airport?",
		answer   : 3,
		option0  : "Kindom Kars",
		option1  : "Disney Uber",
		option2  : "Disney's Mouskateer",
		option3  : "Disney's Magical Express",
	},
	
	{
		question : "Which IS NOT a Walt Disney World attraction:",
		answer   : 0,
		option0  : "Splash Mountain",
		option1  : "Soarin'",
		option2  : "Monster's Inc. Laugh Floor",
		option3  : "The Big Dipper",
	},

];

	var settingDisplay = function(bank) {
		document.getElementById("displayedQuestion").innerHTML =
		bank.question;

		document.getElementById("A1").innerHTML =
		bank.option0;
		document.getElementById("A2").innerHTML =
		bank.option1;
		document.getElementById("A3").innerHTML =
		bank.option2;
		document.getElementById("A4").innerHTML =
		bank.option3;

	};

//settingDisplay(questionBank[0]);

$("button").on("click", next);

function next() {
	settingDisplay(questionBank[0]);

};


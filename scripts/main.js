var rep = new Array;

var faite = new Array;

var score = 0; 
 
 
rep[1] = "c";

rep[2] = "b";

rep[3] = "d";

rep[4] = "a";

rep[5] = "c";


function QCM(question, reponse) {

	if (reponse != rep[question]) {

		if (!faite[question]) {

			faite[question] = -1;

			alert("Faux !! La bonne reponse était en " + rep[question] + "");

		}

		else {

			alert("Tu as deja repondu à cette question !");

		}

	}

	else {

		if (!faite[question]) {

			faite[question] = -1;

			score++;

			alert("Bonne reponse !! ");

		}

		else { 

			alert("Tu as deja repondu a cette question !");

		}

	}

}

function Resultat () {

	if (score >= 4 && score <= 5) {

		alert(score + "/5. " + "Parfait !");

	}
	 
	if (score > 2 && score < 4) {

		alert(score + "/5. " + "Moyen...");

	}
	 
	if (score >= 2 && score < 3) {

		alert(score + "/5. " + "pas fou fou sa");

	}

	if (score > 0 && score< 2 ) {

		alert(score + "/5. " + "nul ! nul ! nul !");
		
	}
	
	if (score < 1) {

		alert(score + "/5. " + "Comment tu fait pour etre aussi nul ?");

	}
}

function ResetPage () {
	faite = new Array;

	score = 0;

	document.quest.reset();

}


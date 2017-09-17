Main = {}
Main.WordArray = [];
Main.WordUarray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i< Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;
}
Main.UpdateLetter = function(letter){
	Main.Changes = 0; 
	for(i = 0; i<Main.word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
			Main.WordUArray[i] == letter;
			Main.Changes += 1;
		}
	}

	if(Main.Changes < 1){
		Main.Live -= 1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}
	Main.WordU = Main.WordArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordArray.join("");

	if(Main.Word1 == Main.Word2){
		alert("You won Loading a ne word");
		window.location.reload();

	}
	if(Main.lives < 1) {
		document.getElementById("WORD").innerHTML == Main.Word;
		alert("You have Run out of lives Try Again");
		window.location.reload();

	}
}

Main.PullWord();
Main.SetUnderline();
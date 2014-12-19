var tictactoeApp = angular.module("tictactoeApp", []);

tictactoeApp.controller('TictactoeController', ['$scope', function($scope){

 $scope.row = [{},{},{},{},{},{},{},{},{}];
 $scope.gameOver = "GAME OVER";

 //var taken square

 $scope.newGame = function(){
 	  $scope.row = [{},{},{},{},{},{},{},{},{}];	  
 	  $scope.status = "";	
 	  $scope.source = "";
 	  $scope.team = "";
 	  $scope.turn = "";
 	  $scope.choose = "";		   
 }

 $scope.joinTeam = function(teamPick){
 	$scope.team = teamPick;
 	$scope.turn = teamPick;
 }

 $scope.startGame = function(){
 	$scope.choose = "CHOOSE YOUR TEAM"
 }

 $scope.checkScore = function(){
 	    if($scope.row[0].className == "markerx" && $scope.row[1].className == "markerx" && $scope.row[2].className == "markerx"){
 	    $scope.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
 	    $scope.source = "images/one_wins.gif";
 	    }
 	    else if($scope.row[3].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[5].className == "markerx"){
 	    $scope.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
 	    $scope.source = "images/one_wins.gif";
 	    }
 	    else if($scope.row[6].className == "markerx" && $scope.row[7].className == "markerx" && $scope.row[8].className == "markerx"){
 	    $scope.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
 	    $scope.source = "images/one_wins.gif";
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[3].className == "markerx" && $scope.row[6].className == "markerx"){
 	    $scope.status = "WELCOME TO THE PARTY, PAL!";
 	    $scope.source = "images/one_wins2.gif";	
 	    }
 	    else if($scope.row[1].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[7].className == "markerx"){
 	    $scope.status = "WELCOME TO THE PARTY, PAL!";
 	    $scope.source = "images/one_wins2.gif";	
 	    }
 	    else if($scope.row[2].className == "markerx" && $scope.row[5].className == "markerx" && $scope.row[8].className == "markerx"){
 	    $scope.status = "WELCOME TO THE PARTY, PAL!";
 	    $scope.source = "images/one_wins2.gif";	
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[8].className == "markerx"){
 	    $scope.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
 	    $scope.source = "images/one_wins4.gif";
 	    }
 	    else if($scope.row[2].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[6].className == "markerx"){
 	    $scope.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
 	    $scope.source = "images/one_wins4.gif";
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[1].className == "markero" && $scope.row[2].className == "markero"){
 	    $scope.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
 	    $scope.source = "images/two_wins.gif";
 	    }
 	    else if($scope.row[3].className == "markero" && $scope.row[4].className == "markero" && $scope.row[5].className == "markero"){
 	    $scope.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
 	    $scope.source = "images/two_wins.gif";
 	    }
 	    else if($scope.row[6].className == "markero" && $scope.row[7].className == "markero" && $scope.row[8].className == "markero"){
 	    $scope.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
 	    $scope.source = "images/two_wins.gif";
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[3].className == "markero" && $scope.row[6].className == "markero"){
 	    $scope.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
 	    $scope.source = "images/two_wins2.gif";	
 	    }
 	    else if($scope.row[1].className == "markero" && $scope.row[4].className == "markero" && $scope.row[7].className == "markero"){
 	    $scope.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
 	    $scope.source = "images/two_wins2.gif";	
 	    }
 	    else if($scope.row[2].className == "markero" && $scope.row[5].className == "markero" && $scope.row[8].className == "markero"){
 	    $scope.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
 	    $scope.source = "images/two_wins2.gif";	
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[4].className == "markero" && $scope.row[8].className == "markero"){
 	    $scope.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
 	    $scope.source = "images/two_wins3.gif";
 	    }
 	    else if($scope.row[2].className == "markero" && $scope.row[4].className == "markero" && $scope.row[6].className == "markero"){
 	    $scope.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
 	    $scope.source = "images/two_wins3.gif";
 	    }
 	};

 	$scope.changeClass = function(row){
 		if($scope.team == "McClane" || $scope.team == "Gruber"){
 			if($scope.team === $scope.turn){
 				if(row.className != "markerx" || row.className != "markero"){
 		

 		if($scope.team == "McClane"){
 			row.className = "markerx";
 		    $scope.turn = "Gruber";
 		}
 		else if($scope.team == "Gruber") {
 		   row.className = "markero";
 		   $scope.turn = "McClane";
 		
 		 }  
 		}
	  }
	}
		$scope.checkScore();
	};


 // $scope.changeClass = function(row){
 // 		if($scope.playerOne == true){
 // 		row.className = "markerx";
 // 		$scope.playerOne = false;
 // 		}
 // 		else {
 // 		   row.className = "markero";
 // 		   $scope.playerOne = true;
 // 		}
	// 	$scope.checkScore();
	// };
 		
}]);

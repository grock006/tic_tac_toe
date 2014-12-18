var tictactoeApp = angular.module("tictactoeApp", []);

tictactoeApp.controller('TictactoeContoller', ['$scope', function($scope){

//newGame board
 $scope.row = [    {section:0, className: ""}, 
 			       {section:1, className: ""}, 
 				   {section:2, className: ""}, 
 				   {section:3, className: ""}, 
 				   {section:4, className: ""}, 
 				   {section:5, className: ""}, 
 				   {section:6, className: ""}, 
 				   {section:7, className: ""}, 
 				   {section:8, className: ""}];

 $scope.className = null;
 $scope.playerOne = true;
 $scope.playerTwo = false;
 console.log($scope.playerOne);
 // this.turn = x, set play to x, changes the ng-class square.play value
 // this.newGame = newGame;

//if there are 4 markerx than markerx wins, and vice versa
 $scope.checkScore = function(){
 	    if($scope.row[0].className == "markerx" && $scope.row[1].className == "markerx" && $scope.row[2].className == "markerx"){
 	    $scope.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
 	    $scope.source = "images/one_wins.gif";
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[3].className == "markerx" && $scope.row[6].className == "markerx"){
 	    $scope.status = "WELCOME TO THE PARTY, PAL!";
 	    $scope.source = "images/one_wins2.gif";	
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[8].className == "markerx"){
 	    $scope.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
 	    $scope.source = "images/one_wins4.gif";
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[1].className == "markero" && $scope.row[2].className == "markero"){
 	    $scope.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
 	    $scope.source = "images/two_wins.gif";
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[3].className == "markero" && $scope.row[6].className == "markero"){
 	    $scope.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
 	    $scope.source = "images/two_wins2.gif";	
 	    }
 	    else if($scope.row[0].className == "markero" && $scope.row[4].className == "markero" && $scope.row[8].className == "markero"){
 	    $scope.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
 	    $scope.source = "images/two_wins3.gif";
 	    }
 	};

//change this to $index in the view
 $scope.changeClass = function(row){
 		if($scope.playerOne == true){
 		row.className = "markerx";
 		$scope.playerOne = false;
 		console.log($scope.playerOne);
 		//alert not your turn
 		}
 		else {
 		   row.className = "markero";
 		   $scope.playerOne = true;
 		}
 		//set playerOne to false, check it in console.log
 		// if playerOne is false then markero
		$scope.checkScore();

	};
 		
}]);


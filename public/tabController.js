angular.module("tabController", [])
.controller("TabController", ["$scope", function($scope){


  // Your code goes here
  $scope.redClass = 'selected';
  $scope.greenClass = 'unselected';
  $scope.blueClass = 'unselected';

  $scope.tabShow = {
  	red: true,
  	green: false,
  	blue: false
  }

  $scope.tabClick = function(color){
  	//console.log()

  	$scope.tabShow.red = false;
  	$scope.tabShow.green = false;
  	$scope.tabShow.blue = false;
  	$scope.tabShow[color] = true;

	$scope.redClass = 'unselected';
	$scope.greenClass = 'unselected';
	$scope.blueClass = 'unselected';
	if(color === "red"){
		$scope.redClass = 'selected'
	}
	if(color === "green"){
		$scope.greenClass = 'selected'
	}
	if(color === "blue"){
		$scope.blueClass = 'selected'
	}

  }
  
}])
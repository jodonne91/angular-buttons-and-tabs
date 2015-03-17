angular.module("buttonController", [])
.controller("ButtonController", ["$scope", "$timeout", function($scope, $timeout){


  // Your code goes here
  $scope.buttonView = false;
  $scope.button = 'submit';

  $scope.buttonClick = function(){
  	$scope.buttonView = true;
  	$scope.button = 'loading...'
  	$timeout(function(){
  		$scope.button = 'submit'
  		$scope.buttonView = false;
  	}, 4000)
  }

}])
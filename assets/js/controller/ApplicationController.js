'use strict';

/**
 * ApplicationController
 * @constructor
 */

(function() {

app.controller('ApplicationController',function($scope, $location) {
  
  $scope.templates = [
		{
			name: 'login.html',
			url: 'html/login.html'},
		{
			name: 'success.html',
			url: 'html/success.html'
		}
	];
    $scope.template = $scope.templates[0];
	$scope.loginData = {};
	$scope.pageHeader = 'Dashboard';
	
	$scope.doLogin = function() {
		var userLoginVO =  {
					"username": $scope.loginData.username,
					"password": $scope.loginData.password,
		}
		$scope.setCurrentUser(userLoginVO);
		$scope.template = $scope.templates[1];
	};
  
	$scope.doLogout = function() {
		$scope.setCurrentUser(null);
		$scope.loginData = {};
		$scope.template = $scope.templates[0];;
	}
	
	$scope.changeHeader = function(header) {
		$scope.pageHeader = header;
	}
	
	$scope.setCurrentUser = function (userLoginVO) {
		$scope.currentUserLoginVO = userLoginVO;
	};
 });
})();


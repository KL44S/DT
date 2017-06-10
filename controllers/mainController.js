(function() {
	var app = angular.module("DT");

	app.controller("mainController", ["$scope", "userService", "constants", function ($scope, userService, constants) {

	    userService.getUsers().then(function (users) {
	        $scope.users = users;
	    });

	    $scope.showUserTeam = function (user) {
	        window.location = constants.userTeamUri + user.userId;
	    };

	}]);

})();

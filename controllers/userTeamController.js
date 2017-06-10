(function() {
	var app = angular.module("DT");

	app.controller("userTeamController", ["$scope", "userTeamService", "$modal", function ($scope, userTeamService, $modal) {
	    var currentPath = window.location.toString();
	    var userId = currentPath.substr(currentPath.indexOf('=') + 1);

	    userTeamService.getUserTeam(userId).then(function (userTeam) {
	        $scope.userTeam = userTeam;
	        console.log(userTeam);
	    });

	    $scope.showScores = function (player) {
	        var modalInstance = $modal.open({
	            templateUrl: 'templates/scores.html',
	            controller: 'scoresController',
	            size: "lg",
	            resolve: {
	                player: function () {
	                    var finalPlayer = {
	                        player: player,
	                        k: $scope.userTeam.K
	                    }

	                    return finalPlayer;
	                }
	            }
	        });
	    }
	}]);
})();

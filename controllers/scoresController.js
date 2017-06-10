(function () {
    var app = angular.module("DT");

    app.controller("scoresController", ["$scope", "$modalInstance", "player", function ($scope, $modalInstance, player) {

        $scope.player = player;

        function getTotalScore(PlayerMatchweekScores) {
            var finalScore = 0;

            PlayerMatchweekScores.forEach(function (score) {
                finalScore += score.ScoreValue;
            });

            return Number((finalScore / PlayerMatchweekScores.length).toFixed(2));
        }

        $scope.totalScore = getTotalScore(player.player.PlayerMatchweekScores);

    }]);

})();

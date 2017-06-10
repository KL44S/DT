(function() {
    var app = angular.module("DT");

    app.factory("userTeamService", ["$http", "constants", "$q", function ($http, constants, $q) {

        var userTeamService = {};

        userTeamService.getUserTeam = function (userId) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var uri = constants.baseUri + constants.userTeamResource + constants.userIdParameter + userId;

            $http.get(uri).then(function (response) {
                deferred.resolve(response.data);
            });

            return promise;
        };

        return userTeamService;

    }]);

})();
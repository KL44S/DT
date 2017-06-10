(function() {
    var app = angular.module("DT");

    app.factory("userService", ["$http", "constants", "$q", function ($http, constants, $q) {

        var userService = {};

        userService.getUsers = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var uri = constants.baseUri + constants.userResource;

            $http.get(uri).then(function (response) {
                deferred.resolve(response.data);
            });

            return promise;
        };

		return userService;

	}]);
})();
	
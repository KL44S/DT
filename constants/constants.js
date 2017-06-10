(function () {
    var app = angular.module("DT");

    app.factory("constants", function () {

        var constants = {
            baseUri: "http://localhost:50325/api/",
            userResource: "User",
            userTeamUri: "userteam?userId="
        };

        return constants;

    });

})();

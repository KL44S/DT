(function () {
    var app = angular.module("DT");

    app.factory("constants", function () {

        var constants = {
            baseUri: "http://localhost:50325/api/",
            userResource: "User",
            userTeamResource: "MatchweekUserTeam",
            userIdParameter: "?UserId=",
            userTeamUri: "userteam.html?userId="
        };

        return constants;

    });

})();

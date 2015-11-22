﻿(function () {
    var ProjectTasksController = function ($scope, $http) {
        var projectTasks = function (serviceResp) {
            $scope.Tasks = serviceResp.data;
        };
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };
        $http.get("http://localhost:2464/api/ptprojecttasks/1")
            .then(projectTasks, errorDetails);
        $scope.Title = "Project Tasks Page";
    };
    app.controller("ProjectTasksController", ProjectTasksController);
}());
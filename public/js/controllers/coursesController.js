minimalApp.controller("coursesController", function ($scope, coursesService){
    //Executes when the controller is created
    $scope.courses = coursesService.courses;

    coursesService.getCourses();

});

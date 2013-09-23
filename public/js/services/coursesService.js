minimalApp.factory("coursesService", function($http){
    var _courses = [];

    var _getCourses = function(){
        $http.get("/js/data/courses.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _courses); //instead of $scope.courses = result.data
            }, function(results){
                //Error
            })
    }

    var _addNewCourse = function(course){
        _courses.splice(0, 0, course);
    }

    return{
        courses: _courses,
        getCourses: _getCourses,
        addNewCourse: _addNewCourse
    };
});

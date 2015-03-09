app.directive("header", function () {
    return {
        templateUrl: "app/partials/directives/header.html"
    }
});
app.directive("head", function () {
    return {
        templateUrl: "app/partials/directives/head.html"
    }
});

app.directive("footer", function () {
    return {
        templateUrl: "app/partials/directives/footer.html"
    }
});

app.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if('#' + currentPath == element[0].hash) {
        console.log('found');
       element.addClass('active');
     } else {
       element.removeClass('active');
     }
   });
 }
 };
}]);

var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'mgcrea.ngStrap'
]);

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://app.mailerlite.com/api/v1');
  //  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'Buymore Ambassador';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);

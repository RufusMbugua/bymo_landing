var app = angular.module("buymore", ['ui.router','restangular','smart-table','chart.js','textAngular','angularMoment','mgcrea.ngStrap']);

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
//  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
     $rootScope.date = new Date();
     $rootScope.title = 'Buymore Ambassador';
     $rootScope.messages=[];
     $rootScope.menu=[];
 }]);

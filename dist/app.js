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
;// I control the main demo.
app.controller(
  "homeCtrl", ['$scope', '$filter', '$timeout', '$state', '$alert',
    'Restangular', '$http',
    function(scope, filter, timeout, state, alert, Restangular, $http) {
      var MailingList = Restangular.all('subscribers').all('1724875');
      scope.getMember = function getMember(newMember) {
        console.log(newMember);
        scope.member = newMember;
        state.go('members.view');
      };

      scope.modal = {
        "title": "Apply for BSA Program",
        //            "content": "Hello Modal<br />This is a multiline message!"
      };

      scope.signup = function signup(ambassador) {
        var alert_text;
        var alert_type;
        var alert_title;
        var myAlert;
        var ambassadorData = {
          apiKey: 'dpIDCxwqM2WdOW73ygF5TODGPB3Cko4m',
          email: ambassador.email,
          name: ambassador.name
        };
        alert_title = "";
        alert_text = "Please wait...";
        alert_type = "warning";
        myAlert = alert({
          title: alert_title,
          content: alert_text,
          placement: 'top',
          type: alert_type,
          show: true,
          container: "#alerts",
          dismissable: false,
          duration: 100
        });


        MailingList.post(ambassadorData).then(function(response) {
          alert_text = response;
        }, function() {
          alert_title = "Error!";
          alert_text = "There was an error saving";
          alert_type = "danger";
          myAlert.hide();
          myAlert = alert({
            title: alert_title,
            content: alert_text,
            placement: 'top',
            type: alert_type,
            show: true,
            container: "#alerts"
          });

        });
      };
    }
  ]
);
;app.directive("header", function () {
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
;app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/partials/pages/home.html',
      controller: 'homeCtrl'
    })

});
;angular.module('templates-dist', ['../app/partials/directives/footer.html', '../app/partials/directives/head.html', '../app/partials/directives/header.html', '../app/partials/pages/home.html']);

angular.module("../app/partials/directives/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/directives/footer.html",
    "<nav class=\"navbar navbar-default footer\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#footer\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"footer\">\n" +
    "            <ul>\n" +
    "                <li><a href=\"\">FAQs</a></li>\n" +
    "                <li><a href=\"\">Terms & Conditions</a></li>\n" +
    "                <li><a href=\"\">Privacy Policy</a></li>\n" +
    "                <li><a href=\"\">&copy;Buymore Limited</a></li>\n" +
    "                <li><a><i class=\"fa fa-phone\"></i>0725 788 168 </a></li>\n" +
    "                <li><a href=\"mailto:hello@buymorecard.com\"><i class=\"fa fa-envelope\"></i>hello@buymorecard.com</a></li>\n" +
    "                <li class=\"social\"><a href=\"#\" ><i class=\"ion-social-twitter\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"#\" ><i class=\"ion-social-facebook\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"#\" ><i class=\"ion-social-instagram\"></i></a></li>\n" +
    "                <li class=\"social\"><a href=\"#\" ><i class=\"ion-social-linkedin\"></i></a></li>\n" +
    "            </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../app/partials/directives/head.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/directives/head.html",
    "<link rel=\"stylesheet\" href=\"dist/styles.css\">\n" +
    "<link rel=\"stylesheet\" href=\"libs/font-awesome/css/font-awesome.css\">\n" +
    "<link rel=\"stylesheet\" href=\"libs/ionicons/css/ionicons.css\">\n" +
    "<link rel=\"stylesheet\" href=\"libs/webfont-opensans/css/stylesheet.css\">\n" +
    "{{title}}\n" +
    "");
}]);

angular.module("../app/partials/directives/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/directives/header.html",
    "<nav style=\"width:90%\" class=\"navbar navbar-default\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <img class=\"img-responsive\" href=\"#\" style=\"width:120px;padding:0\" src=\"assets/images/Buymore-Logo-Transparent.png\" alt=\"\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "            <h4 class=\"red\">The Buymore Card</h4>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "\n" +
    "<script>\n" +
    "    $(document).ready(function(){\n" +
    "\n" +
    "        var canvas = $(\"#canvas_logo\");\n" +
    "        console.log(canvas);\n" +
    "        if(canvas.getContext)\n" +
    "        {\n" +
    "            var ctx = canvas.getContext(\"2d\");\n" +
    "            // Draw triangle\n" +
    "            ctx.fillStyle=\"#e62020\";\n" +
    "            ctx.beginPath();\n" +
    "            // Draw a triangle location for each corner from x:y 100,110 -> 200,10 -> 300,110 (it will return to first point)\n" +
    "            ctx.moveTo(0,0);\n" +
    "            ctx.lineTo(300,0);\n" +
    "            ctx.lineTo(300,90);\n" +
    "            ctx.lineTo(150,120);\n" +
    "            ctx.lineTo(0,90);\n" +
    "            ctx.closePath();\n" +
    "            ctx.fill();\n" +
    "            var image = new Image();\n" +
    "            image.onload = function() {\n" +
    "                ctx.drawImage(image, 20, 10,260,100);\n" +
    "            };\n" +
    "            image.src='assets/images/Buymore-Logo.png';\n" +
    "        }\n" +
    "\n" +
    "    });\n" +
    "</script>\n" +
    "");
}]);

angular.module("../app/partials/pages/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/partials/pages/home.html",
    "<section class=\"full-page\" id=\"home\">\n" +
    "  <div style=\"width:100%\">\n" +
    "    <img src=\"assets/images/Buymore-Card.png\" class=\"img-rounded\" style=\"margin:0 25%\">\n" +
    "  </div>\n" +
    "  <div class=\"row\" style=\"margin-top:5%\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <form action=\"\">\n" +
    "        <div class=\"form-group col-md-5\">\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Name Here\" ng-model=\"ambassador.name\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group col-md-5\">\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Email Address Here\" ng-model=\"ambassador.email\">\n" +
    "        </div>\n" +
    "        <a type=\"button\" class=\"red col-md-2 btn btn-success btn-sm\" ng-click=\"signup(ambassador)\">Sign Up for Newsletter</a>\n" +
    "        <div class=\"col-md-12\" id=\"alerts\">\n" +
    "\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

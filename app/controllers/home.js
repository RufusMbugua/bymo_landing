// I control the main demo.
app.controller(
  "homeCtrl", ['$scope', '$filter', '$timeout', '$state', '$alert',
    'Restangular', '$http',
    function(scope, filter, timeout, state, alert, Restangular, $http) {
      var MailingList = Restangular.all('subscribers').all('1724875').all(
        'apiKey').all('dpIDCxwqM2WdOW73ygF5TODGPB3Cko4m');
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

        $http.post('https://app.mailerlite.com/api/v1/subscribers/1724875',
          ambassadorData).
        success(function(data, status, headers, config) {
          console.log(data)
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        // MailingList.post(ambassadorData).then(function(response) {
        //   alert_text = response;
        // }, function() {
        //   alert_title = "Error!";
        //   alert_text = "There was an error saving";
        //   alert_type = "danger";
        //   myAlert.hide();
        //   myAlert = alert({
        //     title: alert_title,
        //     content: alert_text,
        //     placement: 'top',
        //     type: alert_type,
        //     show: true,
        //     container: "#alerts"
        //   });
        //
        // });
      };
    }
  ]
);

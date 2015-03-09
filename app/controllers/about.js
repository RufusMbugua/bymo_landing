// I control the main demo.
app.controller(
    "aboutCtrl", ['$scope', '$filter','$timeout','$state','$alert','Restangular','$http', function(scope, filter,timeout,state,alert,Restangular,$http) {
        var Ambassador = Restangular.all('ambassador').all('register');
        scope.getMember = function getMember(newMember) {
            console.log(newMember);
            scope.member = newMember;
            state.go('members.view');
        };

        scope.modal = {
            "title": "Apply for BSA Program",
            //            "content": "Hello Modal<br />This is a multiline message!"
        };

        scope.apply = function apply(ambassador){
            var alert_text;
            var alert_type;
            var alert_title;
            var myAlert;
            var ambassadorData={tag:'buymore_bsa', member_identification:ambassador.info};
            alert_title = "";
            alert_text = "Please wait...";
            alert_type = "warning";
            myAlert = alert({title: alert_title, content: alert_text, placement: 'top', type: alert_type, show: true,container:"#alerts",dismissable:false,duration:100});

//            $http.post('http://new.buymore.co.ke/ambassador/register',ambassadorData).
//             success(function(data, status, headers, config) {
//                alert_text = response;
//                alert_type = "success";
//                myAlert.hide();
//                myAlert = alert({title: alert_title, content: alert_text, placement: 'top', type: alert_type, show: true,container:"#alerts"});
//
//            }).
//            error(function(data, status, headers, config) {
//                alert_title = "Error!";
//                alert_text = "There was an error saving";
//                alert_type = "danger";
//                myAlert.hide();
//                myAlert = alert({title: alert_title, content: alert_text, placement: 'top', type: alert_type, show: true,container:"#alerts"});
//
//            });


            Ambassador.post(ambassadorData).then(function(response) {
                alert_text = response;
            }, function() {
                alert_title = "Error!";
                alert_text = "There was an error saving";
                alert_type = "danger";
                myAlert.hide();
                myAlert = alert({title: alert_title, content: alert_text, placement: 'top', type: alert_type, show: true,container:"#alerts"});

            });
        };
    }]
);

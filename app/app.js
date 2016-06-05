var app = angular.module("signUpApp", []);

app.directive('optIn', function(){
	return{
		restrict : 'AE',
		transclude : true,
		templateUrl : 'signUpTemplate.html'
	}
});
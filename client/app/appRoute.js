(function(angular){
	app.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('user', {
	            url: '/',
	            templateUrl: '/app/component/user/view/user.html',
	            controller: 'userCtrl'
            })
	});
 })();
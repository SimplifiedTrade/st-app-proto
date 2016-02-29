( function( ng, undefined ) {

	var module = angular.module( "app.simplifiedtrade", [
		"STrade",
		"ionic",
		"starter.controllers",
		"ngCordova"
	]);

	module.config( function( $stateProvider, $urlRouterProvider ) {
		$stateProvider
			.state( "app", {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: "AppCtrl"
			})
		
			// .state( "app.surveys", {
			// 	url: "/surveys",
			// 	views: {
			// 		"menuContent": {
			// 			templateUrl: "templates/surveys.html"
			// 		}
			// 	}
			// }),
		

			.state( "app.home", {
				url: "/home",
				views: {
					"menuContent": {
						templateUrl: "templates/home.html"
					}
				}
			});
		
		
		$urlRouterProvider.otherwise( "/app/home" );
	});

	module.run( function( $window, $rootScope, $ionicPlatform, $state, $stateParams ) {
		var win = $window;
	
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		$ionicPlatform.ready( function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)

			if ( win.cordova && win.cordova.plugins.Keyboard ) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
				cordova.plugins.Keyboard.disableScroll( true );
			}

			if ( win.StatusBar ) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}

		});
	});

})( angular );
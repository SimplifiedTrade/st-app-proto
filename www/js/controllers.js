( function( ng, undefined ) {

	var module = angular.module( "starter.controllers", [
		"STrade",
		"strade.global.services",
		"strade.global.filters",
		"ngCordova.plugins.badge",
		"ngCordova.plugins.camera",
		"ngCordova.plugins.file",
		"ngCordova.plugins.fileTransfer",
		"ngCordova.plugins.barcodeScanner"
	]);

	module.config( function( $compileProvider ) {
		$compileProvider.imgSrcSanitizationWhitelist( /^\s*(https?|ftp|mailto|file|tel|blob):|data:image\// );
	});
		
	module.run( function( $window, $rootScope, $ionicPlatform, $state, $stateParams, lodash, stUtils ) {

	});
	
	module.controller( "AppCtrl", function( $scope, $rootScope, $ionicModal, $timeout, $ionicHistory, Data ) {

		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		
		// Clear "back" button history
		$ionicHistory.clearHistory();

		// Form data for the login modal
		$rootScope.loginData = null;
		
		
		
		//- - - - DEBUG: LOGGED IN
		/*
		$rootScope.loginData = {
			username: "joe",
			password: "1234"
		};
		*/


		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl( "templates/login.html", { scope: $scope } ).then( function( modal ) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function() {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function() {
			$scope.modal.show();
		};
		
		$scope.logout = function() {
			$rootScope.loginData = null;
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function() {
			console.log( "Doing login", $scope.loginData );

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout( function() {
				$scope.closeLogin();
			}, 1000 );
		};
		
		
		// On ANY View:ENTER
		$rootScope.$on( "$ionicView.enter", function( e, view ) {

		});

	});


})( angular );


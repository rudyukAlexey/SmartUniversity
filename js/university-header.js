(function(){
	var app = angular.module('university-header', []);
	
	app.directive("topPanel", function(){
		return {
			restrict: "E",
			templateUrl: "top-panel.html",
			controller: function(){
				this.tab = "none";
		
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
		
				this.isTab = function(tabName) {
					return this.tab == tabName;
				};
		
				this.cleanTab = function() {
					this.tab = "none";
				};
			},
			controllerAs: "header"
		};
	});
	
	app.directive("addEvent", function(){
		return {
			restrict: "E",
			templateUrl: "add-event.html"
		};
	});
	
	app.directive("signIn", function(){
		return {
			restrict: "E",
			templateUrl: "sign-in.html"
		};
	});
	
	app.directive("signUp", function(){
		return {
			restrict: "E",
			templateUrl: "sign-up.html"
		};
	});
})();
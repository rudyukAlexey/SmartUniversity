(function(){
	var app = angular.module('university-events', []);
	
	app.directive("mainContent", function(){
		return {
			restrict: "E",
			templateUrl: "main-content.html",
			controller: function(){
				this.tab = "main";
				this.donateform = "none";
				this.donate = {};
				this.review = {};
		
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				
				this.isTab = function(tabName) {
					return this.tab == tabName;
				};
				
				this.cleanTab = function() {
					this.tab = "main";
				};
				
				this.addReview = function(reviews, id) {
					
					this.review.user = id;
					var datetime = new Date();
					this.review.date = Date.parse(datetime);
					reviews.push(this.review);
					this.review = {};
				};
				
				this.showDonateForm = function(id) {
					if(typeof(id) === "undefined"){
						this.donateform = "full";
					} else {
						this.donateform = "short";
					}
				};
				
				this.isDonateForm = function(form) {
					return this.donateform == form;
				};
				
				this.donateType = function(type) {
					return this.donateform == type;
				};
				
				this.closeDonateForm = function() {
					this.donateform = "none";
				};
				
				this.addDonate = function(id, event) {
					if( typeof(this.donate.amount) === "undefined"){
						this.donate.amount = 0;
					};
					if(typeof(id) === "undefined"){
						event.currentAmount += this.donate.amount;
						this.donate = {};
					} else {
						event.currentAmount += this.donate.amount;
						this.donate = {};
					}
				}
			},
			controllerAs: "panel"
		};
	});
	
	app.directive("eventsBoard", function(){
		return {
			restrict: "E",
			templateUrl: "events-board.html"
		};
	});
	
	app.directive("eventFull", function(){
		return {
			restrict: "E",
			templateUrl: "event-full.html"
		};
	});
})();
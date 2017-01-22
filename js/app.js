(function(){
	
	var app = angular.module("smartUniversity", ['ngCookies', 'university-events', 'university-header']);

	app.controller("UniversityController", ['$http', '$cookies',  function($http, $cookies){
		var university = this;
		
		university.events = [];
		university.users = [];
		
		$http.get("data/events.json").success(function(data){
			university.events = data;
		});
		
		$http.get("data/users.json").success(function(data){
			university.users = data;
		});
		

		
		this.cookie = {};
		this.user = {};
		this.event = {};
		
		this.isUserExists = function(){
			if(typeof(this.cookie.id) === "undefined"){
				return false
			} else {
				return true
			}
		};
		
		this.quit = function(){
			delete this.cookie.id;
		};
		
		this.addUser = function(users){
			
			users.push(this.user);
			
			this.user = {};
			
		};
		
		this.checkUser = function(users){
			for(var i = 0; i < users.length; i++){
				if(users[i].email == this.user.email && users[i].password == this.user.password) {
						this.cookie.id = users[i].id;
						this.user = {};
						
				} 
			}
		};
		
		this.createEvent = function(events, users){
			this.event.user = users[this.cookie.id].name + " " + users[this.cookie.id].surname;
			this.event.university = users[this.cookie.id].university;
			this.event.currentAmount = 0;
			this.event.likes = 0;
			this.event.reviews = [];
			this.event.image = "images/" + document.getElementById('eventImage').files[0].name;
			this.event.startDate = Date.parse(this.event.startDate);
			this.event.endDate = Date.parse(this.event.endDate);
			events.push(this.event);
			this.event = {};
		};
	}]);
	
	
})();
define(["jquery", "knockout", "kendo"], function ($, ko, kendo) {
    var LocationViewModel = function () {
        var self = this;

        self.Latitude = ko.observable();
        self.Longitude = ko.observable();
        
        self.init = function (e) {
            
        };
        
        self.beforeShow = function (e) {
            
        };
        
        self.show = function (e) {
            self.LoadLocation();
        };    
        
        self.LoadLocation = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("location got!  Lat: " + position.coords.latitude + ", Long:" + position.coords.longitude);
                self.Latitude(position.coords.latitude);
                self.Longitude(position.coords.longitude);
            }, 
            function () {
                console.log("location failed!");
                self.Latitude("error");
                self.Longitude("error");
            });            
        };

        
        return self;
    };

    return LocationViewModel;
});
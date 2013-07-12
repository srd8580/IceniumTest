define(["jquery", "knockout", "kendo"], function ($, ko, kendo) {
    var AboutViewModel = function () {
        var self = this;

        self.AboutApplication = ko.observable("About:  KnowledgeLake Search (Beta)");
        self.showBack = ko.observable(false);
        self.isJsonLoaded = false;
        
        self.init = function (e) {
            console.log("AboutViewModel init");    
        };
        
        self.beforeShow = function (e) {
            console.log("AboutViewModel beforeShow");
        };
        
        self.show = function (e) {
            console.log("AboutViewModel show");
            
            if (!self.isJsonLoaded) {
                $.get("http://www.broadbandmap.gov/broadbandmap/api/dictionary/v1/almanac?format=json", function(data) {
                    console.log("got government data, item count: " + data.Results.length);
                })
                .fail(function () {
                    console.log("get government data failed");  
                })
                .always(function () {
                   self.isJsonLoaded = true; 
                });
            }
        };    

        
        return self;
    };

    return AboutViewModel;
});
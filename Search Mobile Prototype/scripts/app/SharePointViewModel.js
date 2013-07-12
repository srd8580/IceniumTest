define(["jquery", "knockout", "kendo"], 
    function ($, ko, kendo) {
    
        var SharePointViewModel = function () {
            var self = this;
    
            self.Message = ko.observable("");
                    
            self.init = function (e) {
                
            };
            
            self.beforeShow = function (e) {
                
            };
            
            self.show = function (e) {
                console.log("opening browser");
                window.plugins.childBrowser.showWebPage('https://knowledgelake.sharepoint.com/');
                console.log("browser opened");
               
                $.ajax({
                    dataType: 'html',
                    type: 'GET',
                    url: "https://knowledgelake.sharepoint.com/",
                    success: function (data) {
                        console.log("get success!");
                        self.Message("get success!  Length: " + data.length);
                    },
                    error: function () {
                        console.log("get FAILED!");
                        self.Message("get FAILED!");
                    }
                });
            };    
           
            return self;
        };

        return SharePointViewModel;
});
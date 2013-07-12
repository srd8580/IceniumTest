define(["jquery", "knockout", "kendo", "app/AboutViewModel", "app/LocationViewModel", "app/SharePointViewModel"], 
    function ($, ko, kendo, AboutViewModel, LocationViewModel, SharePointViewModel) {
    var HomeViewModel = function() {
        var self = this;
        

        self.HomeText = ko.observable("Home");        
        self.AboutText = ko.observable("About");
        self.SharePointText = ko.observable("SharePoint");

        self.Heading = ko.observable("KnowledgeLake Search (Beta)");
        self.HomePageText = ko.observable("this is the home page bubba");

        self.AboutViewModel = new AboutViewModel();
        self.LocationViewModel = new LocationViewModel();
        self.SharePointViewModel = new SharePointViewModel();
        
        self.init = function (e) {            
            console.log("AppViewModel init"); 
            //child view
            if (self.LocationViewModel["init"])
                self.LocationViewModel.init(e);
        };
        
        self.beforeShow = function (e) {
            console.log("AppViewModel beforeShow");
            //child view
            if (self.LocationViewModel["beforeShow"])
                self.LocationViewModel.beforeShow(e);
        };
        
        self.show = function (e) {
            console.log("AppViewModel show");
            //child view
            if (self.LocationViewModel["show"])
                self.LocationViewModel.show(e);
        };    

        return self;
    };

    return HomeViewModel;
});
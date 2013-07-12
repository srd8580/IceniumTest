/// <reference path="_references.js" />

//global: require
//globals
var App;
var RootViewModel;

require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery',
        knockout: 'lib/knockout',
        domReady: 'lib/domReady',
        kendo: 'lib/kendo.mobile.min',
        partialView: 'knockout/partialView'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        knockout: {
            exports: 'ko'
        },
        kendo: {            
            deps: ['jquery'],
            exports: 'kendo'
        }
    }
});

require(["jquery", "knockout", "domReady", "kendo", "app/Utility", "app/AppViewModel", "partialView"],
    function ($, ko, domReady, kendo, Utility, AppViewModel, partialView) {
        window.AppViewModel = new AppViewModel();
        ko.applyBindings(window.AppViewModel, document.body);                      
        
        //set initial: 'test' to show unit tests out of the gate
        window.App = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            layout: 'default'
        });
        
        domReady(function () {            
            console.log("The DOM is ready - waiting for the device");
            
            document.addEventListener("deviceready", function () {
                console.log("device ready!");
            }, false);  
        });
});

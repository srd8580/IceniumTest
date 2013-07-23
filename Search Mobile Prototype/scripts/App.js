/// <reference path="_references.js" />

//global: require
//globals
var App;
var RootViewModel;

require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery',
        childBrowser: 'lib/childBrowser',
        knockout: 'lib/knockout',
        domReady: 'lib/domReady',
        kendo: 'lib/kendo.mobile.min',
        partialView: 'knockout/partialView',
        WL: 'lib/WL',
        SPServices: 'lib/jquery.SPServices',
        md5: 'lib/md5',
        jqueryClass: 'lib/jquery.class',
        digestAuth: 'lib/digest-auth'
    },    
    shim: {
        jquery: {
            exports: 'jquery'
        },
        md5: {
            exports: 'md5',
            deps: ['jquery']
        },
        jqueryClass: {
            exports: 'jqueryClass',
            deps: ['jquery']            
        },
        digestAuth: {
            exports: 'digestAuth',
            deps: ['jquery', 'md5', 'jqueryClass']
        },
        childBrowser: {
            exports: 'childBrowser'  
        },     
        knockout: {
            exports: 'ko'
        },
        kendo: {            
            deps: ['jquery'],
            exports: 'kendo'
        },
        WL: {
            exports: 'WL'
        },
        SPServices: {
            exports: 'SPServices'
        }
    }
});

require(["jquery", "knockout", "domReady", "kendo", "md5", "jqueryClass", "digestAuth", "app/Utility", "app/AppViewModel", "partialView"],
    function ($, ko, domReady, kendo, md5, jqueryClass, digestAuth, Utility, AppViewModel, partialView) {
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

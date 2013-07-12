/*global QUnit,requirejs*/
define(['config',
		'require'],
	function (config, require) {
	    'use strict';
	    
		requirejs.config({
            baseUrl: 'scripts',
            paths: {
                jquery: 'lib/jquery',
                knockout: 'lib/knockout',
                domReady: 'lib/domReady',
                kendo: 'lib/kendo.mobile.min',
                partialView: 'knockout/partialView',
                cordova: '../cordova'
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
                },
                cordova: {
                    exports: 'cordova'
                }
            }
        });
		//now begin page ...stuff
		var rootPath = '/test/resources/';
		//dont begin page stuff

		require([],
                function () {
                    
                    require(['knockout',
                             rootPath + 'app_areas_home_wizard_wizardHostViewModelTest.js'
                    ], function (ko) {
                        QUnit.start(); //Tests loaded, run tests
                    });
                }
		);
	});
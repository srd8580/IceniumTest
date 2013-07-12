define(['jquery'],
    function ($) {
        QUnit.config.autostart = false;
        QUnit.config.autorun = false;
        
        var UnitTestViewModel = function () {
            var self = this;
            
            self.show = function() {
                require(['../test/resources/simpleUnitTest'], function () {
                    console.log("QUnit.start");
                    QUnit.start(); //Tests loaded, run tests        
                });
            };
            
            return self;
        };
        
        return UnitTestViewModel;
    });
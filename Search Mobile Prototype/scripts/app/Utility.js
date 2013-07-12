﻿/// <reference path="_references.js" />

define([], function () {
    return {
        getParameterByName: function (name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location);

            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };
});
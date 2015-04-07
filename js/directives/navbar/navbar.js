'use strict';

angular.module('bk.angular.ui.navbar', [])
    .directive("bkNavBar", function () {
        return {
            replace: true,
            scope: {
                brandName: "@brandName",
                clickFn: '&clickFn'
            },
            templateUrl: "test/template.html"
        }
    });
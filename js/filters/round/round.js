'use strict';

angular.module('bk.angular.filters.round', [])
    .filter('round', function () {
        return function (value, precision) {
            if (angular.isUndefined(value)) {
                return 0;
            }
            if (angular.isUndefined(precision) || !angular.isNumber(precision)) {
                precision = 2;
            }
            return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
        };
    });
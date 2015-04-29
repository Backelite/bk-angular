'use strict';

angular.module('bk.angular.filters.abs', [])
    .filter('bkAbs', function () {
        return function (value) {
            if (angular.isUndefined(value) || !angular.isNumber(value)) {
                return 0;
            }
            return Math.abs(value);
        };
    });
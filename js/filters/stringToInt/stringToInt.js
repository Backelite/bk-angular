'use strict';

angular.module('bk.angular.filters.stringToInt', [])
    .filter('bkStringToInt', function () {
        return function (value) {
            if (angular.isString(value)) {
                return parseInt(value);
            }
            else if (angular.isArray(value)) {
                var integers = [];
                angular.forEach(value, function(string) {
                    integers.push(parseInt(string));
                });
                return integers;
            }
            return value;
        };
    });
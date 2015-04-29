'use strict';

angular.module('bk.angular.filters.sign', [])
    .filter('bkSign', function () {
        return function (value) {
            if (angular.isUndefined(value) || !angular.isNumber(value)) {
                return '';
            }
            return (value>0) ? ('+'+value) : value;
        };
    });
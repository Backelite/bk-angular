'use strict';

angular.module('bk.angular.filters.quarter', [])
    .filter('bkQuarter', function () {
        return function (value) {
            if (angular.isDate(value)) {
                return '';
            }
            var month = parseInt($filter('date')(value, "M"));
            return 'Q' + (month + 2 - (month-1)%3)/3;
        };
    });
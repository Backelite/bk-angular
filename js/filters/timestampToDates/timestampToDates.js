'use strict';

angular.module('bk.angular.filters.timestampToDates', [])
    .filter('bkTimestampToDates', function () {
        return function (data, key) {
            if (angular.isUndefined(data) || !angular.isArray(data)) {
                return data;
            }
            var dates = [];
            angular.forEach(data, function (element) {
                if(angular.isDefined(key) && angular.isString(key)) {
                    if(angular.isDefined(element[key]) && angular.isNumber(element[key])) {
                        element[key] = new Date(element[key]);
                    }
                }
                else {
                    if (angular.isDefined(element) && angular.isNumber(element)) {
                        element = new Date(element);
                    }
                }
            });
            return data;
        };
    });
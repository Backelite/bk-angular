'use strict';

angular.module('bk.angular.filters.undefinedValues', [])
    .filter('bkUndefinedValues', function () {
        return function (data, key) {
            if (angular.isUndefined(data) || !angular.isArray(data)) {
                return [];
            }
            var undefinedValues = [];
            angular.forEach(data, function (element) {
                if(angular.isDefined(key) && angular.isString(key)) {
                    if(angular.isUndefined(element[key])) {
                        undefinedValues.push(element);
                    }
                }
                else {
                    if (angular.isUndefined(element)) {
                        undefinedValues.push(element);
                    }
                }
            });
            return undefinedValues;
        };
    });
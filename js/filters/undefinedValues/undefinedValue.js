'use strict';

angular.module('bk.angular.filters.undefinedValues', [])
    .filter('bkUndefinedValues', function () {
        return function (data, key) {
            if (angular.isUndefined(data)) {
                return [];
            }
            var undefinedValues = [];
            angular.forEach(data, function (element) {
                if(angular.isDefined(key)) {
                    if(angular.isUndefined(element[key])) {
                        undefinedValues.add(element);
                    }
                }
                else {
                    if (angular.isUndefined(element)) {
                        undefinedValues.add(element);
                    }
                }
            });
            return undefinedValues;
        };
    });
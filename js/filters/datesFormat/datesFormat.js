'use strict';

angular.module('bk.angular.filters.datesFormat', [])
    .filter('bkDatesFormat', function ($filter) {
        return function (data, format, key) {
            if (angular.isUndefined(data) || !angular.isArray(data) || !angular.isString(format)) {
                return data;
            }
            angular.forEach(data, function (element, index) {
                if(angular.isDefined(key) && angular.isString(key)) {
                    if(angular.isDefined(element[key])) {
                        element[key] = $filter('date')(element[key], format);
                    }
                }
                else {
                    if (angular.isDefined(element)) {
                        data[index] = $filter('date')(element, format);
                    }
                }
            });
            return data;
        };
    });
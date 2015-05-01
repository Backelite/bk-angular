'use strict';

angular.module('bk.angular.filters.renameKeys', [])
    .filter('bkRenameKeys', function ($filter) {
        return function (data, keys) {
            if (angular.isUndefined(data) || !angular.isArray(data) || !angular.isObject(keys)) {
                return data;
            }
            var array = [];
            angular.forEach(data, function (element) {
                var object = {};
                angular.forEach(keys, function(property, key) {
                    if(angular.isDefined(element[property])) {
                        object[key] = element[property];
                    }
                });
                array.push(object);
            });
            return array;
        };
    });
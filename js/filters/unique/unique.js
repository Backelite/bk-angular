'use strict';

angular.module('bk.angular.filters.unique', [])
    .filter('bkUnique' , function () {
        return function (data, propertyName) {
            var results = [];
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var keys = {};
                for (var i = 0; i < data.length; i++) {
                    var val = data[i][propertyName];
                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
            }
            return results;
        }
    });
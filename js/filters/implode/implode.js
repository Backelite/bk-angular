'use strict';

angular.module('bk.angular.filters.implode', [])
    .filter('bkImplode', function () {
        return function (data, separator) {
            if (angular.isArray(data) && angular.isString(separator)) {
                return data.join(separator);
            } else {
                return '';
            }
        }
    });
'use strict';

angular.module('bk.angular.filters.sumByKey', [])
    .filter('bkSumByKey', function () {
        return function (data, key) {
            if (angular.isUndefined(data) || angular.isUndefined(key)) {
                return 0;
            }
            var sum = 0;
            for (var i = data.length - 1; i >= 0; i--) {
                if(angular.isNumber(data[i][key])) {
                    sum += data[i][key];
                }
            }
            return sum;
        };
    });
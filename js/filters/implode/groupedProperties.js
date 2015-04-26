'use strict';

angular.module('bk.angular.filters.groupedProperties', [])
    .filter('bkGroupedProperties', function () {
        return function (data, properties) {
            var results = [];
            if (angular.isArray(data)) {
                angular.forEach(data, function (element) {
                    if (angular.isString(properties)) {
                        if (angular. isArray(element[properties])) {
                            angular.forEach(element[properties], function (propertyElement) {
                                results.push(propertyElement);
                            });
                        }
                        else if (angular.isDefined(element[properties])) {
                            results.push(element[properties]);
                        }
                    }
                    else if (angular.isArray(properties)) {
                        angular.forEach(properties, function (property) {
                            if (angular. isArray(element[property])) {
                                angular.forEach(element[property], function (propertyElement) {
                                    results.push(propertyElement);
                                });
                            }
                            else if (angular.isDefined(element[property])) {
                                results.push(element[property]);
                            }
                        });
                    }
                });
            }
            else if (angular.isString(properties)) {
                if (angular. isArray(data[properties])) {
                    angular.forEach(data[properties], function (propertyElement) {
                        results.push(propertyElement);
                    });
                }
                else if (angular.isDefined(data[properties])) {
                    results.push(data[properties]);
                }
            }
            else if (angular.isArray(properties)) {
                angular.forEach(properties, function (property) {
                    if (angular. isArray(data[property])) {
                        angular.forEach(data[property], function (propertyElement) {
                            results.push(propertyElement);
                        });
                    }
                    else if (angular.isDefined(data[property])) {
                        results.push(data[property]);
                    }
                });
            }
            return results;
        }
    });
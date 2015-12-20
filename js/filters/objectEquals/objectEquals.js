'use strict';

angular.module('bk.angular.filters.objectEquals', [])
    .filter('bkObjectEquals', function ($filter) {
        return function (object, otherObject, identifierKey) {
            if (!angular.isObject(object) || !angular.isObject(otherObject)) {
                return false;
            }
            if(object===otherObject) {
                return true;
            }
            if (angular.isDefined(identifierKey) && angular.isDefined(object[identifierKey]) && angular.isDefined(otherObject[identifierKey])) {
                return object[identifierKey]===otherObject[identifierKey];
            }
            if (angular.isUndefined(identifierKey) && angular.isDefined(object['id']) && angular.isDefined(otherObject['id'])) {
                return object['id']===otherObject['id'];
            }
            return false;
        };
    });
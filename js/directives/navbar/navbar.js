'use strict';

angular.module('bk.angular.ui.navbar', [])
    .directive('bkNavBar', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                leftItems: '=',
                rightItems: '=',
                labelProperty: '@',
                iconProperty: '@',
                urlProperty: '@',
                childsProperty: '@',
                fixedToTop: '@',
                headerBrandName: '@',
                headerLogoClassName: '@',
                headerToggleLabel: '@',
                searchFieldEnabled: '@',
                searchFieldOnLeft: '@',
                searchFieldPlaceholder: '@',
                searchFieldSubmitFn: '&'
            },
            link: function (scope, element, attrs) {
                if (angular.isDefined(scope.childsProperty)) {
                    angular.forEach(scope.leftItems, function (item) {
                        item.childs = item[scope.childsProperty];
                    });
                    angular.forEach(scope.rightItems, function (item) {
                        item.childs = item[scope.childsProperty];
                    });
                }
            },
            templateUrl: 'bk.angular.ui.navbar.html'
        }
    }).
    directive('bkNavBarHeader', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                navCollapsed: '=',
                brandName: '=',
                logoClassName: '=',
                toogleLabel: '='
            },
            templateUrl: 'bk.angular.ui.navbar.header.html'
        }
    }).directive('bkNavBarSearchField', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                placeholder: '=',
                submitFn: '&'
            },
            templateUrl: 'bk.angular.ui.navbar.searchfield.html'
        }
    });
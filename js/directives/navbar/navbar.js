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
    })
    .directive('bkNavBarUl', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                labelProperty: '=',
                iconProperty: '=',
                urlProperty: '=',
                childsProperty: '='
            },
            link: function (scope, element, attrs) {
                if (angular.isDefined(scope.childsProperty)) {
                    angular.forEach(scope.items, function (item) {
                        item.childs = item[scope.childsProperty];
                    });
                }
            },
            templateUrl: 'bk.angular.ui.navbar.ul.html'
        }
    })
    .directive('bkNavBarLi', function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                item: '=',
                labelProperty: '=',
                iconProperty: '=',
                urlProperty: '=',
                childsProperty: '='
            },
            link: function (scope, element, attrs) {
                if (angular.isDefined(scope.item.childs) && scope.item.childs.length>0) {
                    element.append('<bk-nav-bar-ul items=\"item.childs\" childs-property=\"childsProperty\" label-property=\"labelProperty\" icon-property=\"iconProperty\" url-property=\"urlProperty\"></bk-nav-bar-ul>');
                    element.addClass('dropdown-submenu');
                    $compile(element.contents())(scope);
                }
            },
            templateUrl: 'bk.angular.ui.navbar.li.html'
        }
    })
    .directive('bkNavBarHeader', function () {
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
    })
    .directive('bkNavBarSearchField', function () {
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
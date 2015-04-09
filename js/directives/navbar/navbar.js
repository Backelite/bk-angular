'use strict';

angular.module('bk.angular.ui.navbar', [])
    .directive("bkNavBar", function () {
        return {
            replace: true,
            scope: {
                headerBrandName: "@",
                headerLogoClassName: "@",
                headerToggleLabel: "@",
                leftItems: "=",
                rightItems: "=",
                labelProperty: "@",
                searchFieldEnabled: "@",
                searchFieldOnLeft: "@",
                searchFieldPlaceholder: "@",
                searchFieldSubmitFn: '&'
            },
            templateUrl: "bk.angular.ui.navbar.html"
        }
    }).directive("bkNavBarHeader", function () {
        return {
            replace: true,
            scope: {
                navCollapsed: "=",
                brandName: "=",
                logoClassName: "=",
                toogleLabel: "="
            },
            templateUrl: "bk.angular.ui.navbar.header.html"
        }
    }).directive("bkNavBarSearchField", function () {
        return {
            replace: true,
            scope: {
                placeholder: '=',
                submitFn: '&'
            },
            templateUrl: "bk.angular.ui.navbar.searchfield.html"
        }
    });
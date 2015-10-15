'use strict';

angular.module('bk.angular.ui.formulaInput', [])
    .directive('bkFormulaInput', function ($filter) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                formula: '=',
                value: '='
            },
            controller: function ($scope, $element, $attrs) {
                if(angular.isUndefined($scope.value) || !angular.isNumber($scope.value)) {
                    $scope.value = 0;
                }
                if((angular.isUndefined($scope.formula) || $scope.formula===null || $scope.formula.length===0) && $scope.value>0) {
                    $scope.formula = $scope.value;
                }
                $scope.formulaChange = function (formula) {
                    try {
                        $scope.value = $scope.$eval(formula.replace(",", "."));
                        if (angular.isUndefined($scope.value)) {
                            $scope.value = 0;
                        }
                    } catch (e) {
                        $scope.value = 0;
                    }
                    $scope.value = $filter('bkRound')($scope.value, 3);
                }
            },
            templateUrl: 'bk.angular.ui.formulaInput.html'
        }
    });
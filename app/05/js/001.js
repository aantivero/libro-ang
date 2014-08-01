/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('usoScopeApp', [])
        .run(function($rootScope) {
            //usando .run para acceder al rootScope
            $rootScope.rootProperty = 'root scope';
        }).controller('ParentController', ['$scope', function($scope){
            $scope.parentProperty = 'parent scope';
        }]).controller('ChildController', ['$scope', function($scope){
            $scope.childProperty = 'child scope';
            $scope.fullSentenceFromChild = 'Algun $scope : podemos acceder '+
                    $scope.rootProperty + 
                    ' y ' + $scope.parentProperty + 
                    ' y ' + $scope.childProperty;
        }]);
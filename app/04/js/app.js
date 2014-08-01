/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('validacionApp', [])
        .directive('ensureUnique', function($http){
            return {
              require: 'ngModel',
              link: function(scope, ele, attrs, c){
                  scope.$watch(attrs.ngModel, function(n){
                     if(!n)return;
                     $http({
                         method:'POST',
                         url:'/api/check/'+attrs.ensureUnique,
                         data:{'field':attrs.ensureUnique}
                     }).success(function(data){
                        c.$setValidity('unique', data.isUnique);
                     }).error(function(data){
                        c.$setValidity('unique', false); 
                     });
                  });
              }
            };
}).controller('signupController', function($scope){
    $scope.submitted = false;
    $scope.signupForm = function(){
      if($scope.signup_form.$valid){
          //submit normal
      } else {
          $scope.signup_form.submitted = false;
      } 
    };
});


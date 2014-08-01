/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp', [])
    .directive('myDirective', function(){
        return {
          restrict: 'E',
          replace: true,//eliminar <my-directive> del DOM
          template: '<a href="http://google.com"> Go to Google</a>'
        }
});


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('pddApp', [])
        .directive('myDirective', function(){
            return {
                restrict: 'AEC',
                replace: true,
                scope: {
                    myUrl: '@',
                    link: '@',
                    pepe: '@'
                    
                },
                template: '<a href="{{myUrl}}">{{link}} - {{pepe}}</a>'
            }
});
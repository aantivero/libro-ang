/**
 * Ejemplo de filtros
 */

var app = angular.module('myApp', []);
app.controller('DemoController', ['$scope', '$filter', function($scope, $filter){
    $scope.nombre = $filter('lowercase')('Alejandro Antivero');
    $scope.today = new Date();
    /*filtro funcion en el scope*/
    $scope.isCapitalized = function(str){
      return str[0] == str[0].toUpperCase();  
    };
}]);
/**
 * Este es un filtro propio para poner mayuscula un texto.
 * Una buena practica seria ponerlo en un script separado.
 */
app.filter('capitalize', function(){
    return function(input){
        if(input)
            return input[0].toUpperCase() + input.slice(1);
    };
});
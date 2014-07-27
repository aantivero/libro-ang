/* 
 * Primer Aplicacion y Controller
 * Se modifican los nombres utilizando las mejores prácticas.
 */
var app = angular.module('miApp',[]);
app.controller('primerCtrl', function($scope){
    $scope.nombre = "Alejandro";
});
app.controller('segundoCtrl', function($scope){
   $scope.contador = 0;
   $scope.sumar = function(cantidad){
     $scope.contador += cantidad;  
   };
   $scope.restar = function(cantidad){
       $scope.contador -= cantidad;
   };
});


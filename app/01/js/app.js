/* 
 * Primer Aplicacion y Controller
 * Se modifican los nombres utilizando las mejores prácticas.
 */
var app = angular.module('miApp',[]);
app.controller('primerController', function($scope){
    $scope.persona = {
        nombre: "Alejandro Antivero",
        edad: 35
    };
    $scope.reloj = {
      actual: new Date()  
    };
    var updateReloj = function(){
      $scope.reloj.actual = new Date();  
    };
    setInterval(function(){
        $scope.$apply(updateReloj);
    }, 1000);
    updateReloj();
});
app.controller('segundoController', function($scope){
   $scope.contador = 0;
   $scope.sumar = function(cantidad){
     $scope.contador += cantidad;  
   };
   $scope.restar = function(cantidad){
       $scope.contador -= cantidad;
   };
});
/*
 * vamos a probar la herencia en los controllers
 */
app.controller('padreController', function($scope){
    $scope.usuario = {
        saludar: false
    };
});
app.controller('hijoController', function($scope){
   $scope.decirHola = function(){
       $scope.usuario.nombre = "Luis Spinetta";
       $scope.usuario.saludar = true;
   }; 
});

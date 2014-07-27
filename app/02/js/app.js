/* 
 * Expresiones.
 */
var app = angular.module('miApp', []);
app.controller('miController', function($scope, $parse){
   $scope.$watch('expr', function(newVal, oldVal, scope){
      if(newVal !== oldVal){
          var parseFun = $parse(newVal);
          $scope.valorParseado = parseFun(scope);
      } 
   });
});

/**
 * podemos usar la interpolacion del texto, en esta caso cuando 
 * en el texto encuentra {{para}} lo reemplaza en el preview por el valor 
 * de la variable para o destinatario
 */
app.controller('interpolateController', function($scope, $interpolate){
   $scope.$watch('emailBody', function(body){
      var template = $interpolate(body);
      $scope.vistaPrevia = template({para: $scope.para});
   }); 
});


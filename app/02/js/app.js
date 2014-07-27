/* 
 * Expresiones.
 */
var app = angular.module('miApp', ['emailParser']);
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
app.controller('interpolateController', ['$scope', 'EmailParser',
    function($scope, EmailParser) {
        $scope.$watch('emailBody', function(body) {
            if (body) {
                $scope.vistaPrevia = EmailParser.parse(body, {para: $scope.para});
            }
        });
    }
]);


/* 
 * Primer Aplicacion 
 * Se agrega un elemento el rootscope para acceder desde la view. 
 */
angular.module('miAplicacion',[])
        .controller('miController', function($scope){
            $scope.nombre = 'Alejandro';
});


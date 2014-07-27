/* 
 * Primer Aplicacion 
 * Se agrega un elemento el rootscope para acceder desde la view. 
 */
angular.module('miAplicacion',[])
        .run(function($rootScope){
            $rootScope.nombre = "Mundo";
});


/* 
 * Primer Controller de la pagina hola.html.
 * Se considera una buena práctica de Data Binding pasar referencias a la vista
 * por medio de atributos de un objeto. 
 */
function MiPrimerController($scope){
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
};


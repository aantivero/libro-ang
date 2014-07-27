/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function MiPrimerController($scope){
    $scope.reloj = new Date();
    
    var updateReloj = function(){
      $scope.reloj = new Date();  
    };
    
    setInterval(function(){
        $scope.$apply(updateReloj);
    }, 1000);
    
    updateReloj();
};


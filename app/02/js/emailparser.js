/* 
 * Email Parser Service.
 * Para modificar la forma de parsear el simbolo.
 * En este caso lee todo valor con un formato __valor__
 */

angular.module('emailParser',[])
        .config(['$interpolateProvider', 
            function($interpolateProvider){
                $interpolateProvider.startSymbol('__');
                $interpolateProvider.endSymbol('__');
}])
    .factory('EmailParser', ['$interpolate', 
        function($interpolate){
            return {
              parse: function(text, context){
                  var template = $interpolate(text);
                  return template(context);
              }  
            };
}]);

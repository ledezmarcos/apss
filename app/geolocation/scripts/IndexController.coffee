angular
  .module('geolocation')
  .controller 'IndexController', ($scope, supersonic) ->
    # Controller functionality here
    angular
  	  .module('geolocation')
  	  .controller 'IndexController', ($scope, supersonic) ->
   	    # Controller functionality here
   	    $scope.getPosition = () ->
          supersonic.ui.dialog.alert "Interstellar!"
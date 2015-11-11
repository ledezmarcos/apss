(function() {
  angular.module('geolocation', ['common']);

}).call(this);

(function() {
  angular.module('geolocation').controller('IndexController', function($scope, supersonic) {
    return angular.module('geolocation').controller('IndexController', function($scope, supersonic) {
      return $scope.getPosition = function() {
        return supersonic.ui.dialog.alert("Interstellar!");
      };
    });
  });

}).call(this);

var loginModulo = angular.module('loginModulo', []);

loginModulo.controller('loginController', function ($scope, $location){
  $scope.validaLogin = function() {
    var email = $scope.email;
    var senha = $scope.senha;
    if($scope.email == 'felipefuerback@hotmail.com' && $scope.senha == '123') {
      
    }
  }
})
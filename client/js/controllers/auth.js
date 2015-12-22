angular.module('app').controller('AuthLoginController', ['$scope', 'AuthService', '$state',
      
    function($scope, AuthService, $state) {
      $scope.user = {
        realm: '',
        email: '',
        password: ''
      };

    $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
        .then(function(response) {
          if(response == undefined){
            $state.go('home');  
            
          }else{
            $scope.alert = "Usuário/Senha não encontrado no sistema";
          }
          
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('login');
      });
  }])
  .controller('SignUpController', ['$scope', 'AuthService', '$state',
    
    function($scope, AuthService, $state) {
      $scope.user = {
        realm: '',
        email: '',
        password: ''
      };

    $scope.register = function() {
      AuthService.register($scope.user.realm, $scope.user.email, $scope.user.password)
        .then(function() {
          $state.transitionTo('sign-up-success');
        });
    };

  }]);

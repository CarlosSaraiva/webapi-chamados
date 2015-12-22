angular.module('app').factory('AuthService', ['Agent', '$q', '$rootScope', function(User, $q, $rootScope) {
    
    function login(email, password) {
      return User.login({email: email, password: password}).$promise.then(function(response) {
          $rootScope.currentUser = { 
            realm: response.user.realm,           
            id: response.user.id,
            tokenId: response.id,
            email: email
          };

        }, function(error){
          return error;
        });
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(realm, email, password) {
      return User
        .create({
         realm: realm,
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
    
  }]);

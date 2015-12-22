angular.module('app').controller('security', ['$scope', '$rootScope', 'AuthService', 'Agent', '$state',
      
    function($scope, $rootScope, AuthService, Agent, $state) {        
        console.log($rootScope.currentUser.realm);        

        Agent.find({
        	filter:{
        		where:{
        			realm: $rootScope.currentUser.realm
        		}
        	}
        })
        .$promise.then(function(agents) {
            $scope.agents = agents;
            console.log(agents);            
          });


}])
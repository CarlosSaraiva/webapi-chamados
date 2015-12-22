angular.module('app').controller('ticket', ['$scope', 'Ticket', '$state',
      
    function($scope, Ticket, $state) {
      	
        Ticket.find({
        	filter:{
        		where:{        			
        		}
        	}
        })
        .$promise.then(function(tickets) {
            $scope.tickets = tickets;
            console.log(tickets);            
          });
	}

]);
module.exports = function(Agent) {
    Agent.beforeRemote('login', function(context, user, next){
        var req = context.req;

        Agent.findOne({where: {
            email: req.body.email
            }
        }, function(err, agent){            
            //req.body.realm = agent.realm            
        });

        next();
    });
};

module.exports = function(User) {
    User.beforeRemote('login', function (context, user, next) {

        var req = context.req;

        User.findOne({where: {
            email: req.body.email
            }
        }, function(err, agent) {
            if (!agent) {
                context.res.send({userNotFound: true});
            } else {
                next();
            }
        });

    });
};

var dsConfig = require('../datasources.json');

module.exports = function (app) {

    app.post('/login', function (req, res) {
        User.login({
            email: req.body.email,
            password: req.body.password
        }, 'user', function (err, token) {
            if (err) {
                res.render('response', {
                    title: 'Login failed',
                    content: err,
                    redirectTo: '/',
                    redirectToLinkText: 'Try again'
                });
                return;
            }
            
            res.render('home', {
                email: req.body.email,
                accessToken: token.id
            });
        });
    });
    
}
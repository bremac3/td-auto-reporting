var casper = require('casper').create();

casper.start('https://easyweb.td.com/waw/idp/login.htm?execution=e1s1', function() {

    this.waitForSelector("form input[name='login:AccessCard']", function() {
         this.fill('form#login', {
            'login:AccessCard':    'USERNAME',
            'login:Webpassword':   'PASSWORD'
        }, true);
    });
});

casper.then(function(){
	this.captureSelector('capture.png', '#td-wrapper');
    this.echo('First Page: ' + this.getTitle());
});

casper.then(function(){
    this.evaluate(function() {
        document.querySelector('input#login').click();
    });
});

casper.then(function(){
    this.capture('after.png');
});

casper.run(function(){
	this.echo("I'm done").exit();
});

var express = require('express'),
    http = require('http'),
    app = express();

    BEM = require('bem'),
    BEMC = require('bemc'),
    Q = BEM.require('q'),
    VM = require('vm'),
    FS = require('fs');

app.configure(function(){
    app.set('env', 'testing');
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(__dirname + '/desktop.bundles/index'));
    app.use(express.bodyParser());
    app.use(app.router);
});

var coreBemhtml = FS.readFileSync('bem-bl/blocks-common/i-bem/__html/i-bem__html.bemhtml', 'utf8');

var getHtml = function(bemjson, bemhtml) {
    bemhtml = BEMC.compile(coreBemhtml + bemhtml);

    return bemhtml.apply(VM.runInThisContext(bemjson));
};

app.post('/', function(req, res) {
    res.send(getHtml(req.body.bemjson, req.body.bemhtml));
});

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
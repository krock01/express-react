/**
 * Created by krock on 1/12/17.
 */

var browserify = require("browserify");
var packages = require("../../src/packages");
var babelify = require('babelify');
var watchify = require('watchify');
var crypto = require('crypto');
var fs = require('fs-extra');
var path = require('path');
module.exports = function () {
    var src, ready,queue = [];
    function writeBundle(buff){
        fs.outputFile(path.resolve(path.join(__dirname, '../../public/javascripts', 'bundle.js')), buff, 'utf8');
    }
    function build(){
        var opts=
        { debug:true,cache: {}, packageCache: {} };

        var b =  browserify("./public/javascripts/site.js",opts);

        b.transform(babelify);
        packages.forEach(function (i) { b.exclude(i); });
        b = watchify(b, { poll: 500 });
        b.bundle(function (err, buff) {
            if (err) return console.log(err);
            src = buff;
            ready = true;
            queue.forEach(function (reqres) {
                send.apply(null, reqres);
            });
            writeBundle(buff);
        });
        b.on('update', function () {
            b.bundle(function (err, buff) {
                if(err) return console.log(err);
                src=buff;
                writeBundle(buff);
            });
        });
    }
    function serve(req,res){
        if(!ready){
            build();
            queue.push([req, res]);
            return;
        }
        send(req,res);
    };
    function send (req, res) {
        res.setHeader('Content-Type', 'application/javascript');
        var etag = crypto.createHash('md5').update(src).digest('hex').slice(0, 6);
        if (req.get && (etag === req.get('If-None-Match'))) {
            res.status(304);
            res.end();
        }
        else {
            res.setHeader('ETag', etag);
            res.setHeader('Vary', 'Accept-Encoding');
            res.send(src);
        }
    };
    return {
        build:build,
        serve:serve
    };
};
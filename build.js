/**
 * Created by krock on 1/11/17.
 */

var browserify = require("browserify");
var packages = require("./src/packages");
var b = browserify({
    debug: process.env.NODE_ENV !== 'production'
});
packages.forEach(function (i) { b.require(i); });
b.bundle().pipe(process.stdout);

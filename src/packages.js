/*
This file exports the common packages required by the Admin UI.

It is used by build.js to to generate public/js/packages.js, and the packages
below are excluded from the browserify builds generated by
admin/server/middleware/browserify.js
*/

module.exports = [
	'react-dom',
	'react'
];
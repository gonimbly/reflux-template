var Reflux = require('reflux');

var Actions = Reflux.createActions([
	'appLoaded',
	{'changeProject':{sync:true}}
]);

module.exports = Actions;
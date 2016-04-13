var Reflux = require('reflux');

var Actions = Reflux.createActions([
	'appLoaded',
	{'updateName':{sync:true}}
]);

module.exports = Actions;
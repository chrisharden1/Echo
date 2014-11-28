//Harden
/**
 * Hack attempt at creating javascript interface for Echo plugin
 */
window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
                 callback('Nothing to echo.');
                 }, "Echo", "echo", [str]);
};

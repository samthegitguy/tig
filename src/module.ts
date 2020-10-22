var shell = require("shelljs");
var init = function () { };
var snap = function (msg, callback) {
    var err;
    var logLocation = ".tig/logs/" + Date.now + ".log";
    var snapLocation = ".tig/snaps/" + msg;
    // shell.exec("copy " + snapLocation);
    console.log('Creating');
    setTimeout(function () {
        console.log("Done!");
    }, 1000);
    if (err) {
        callback(true, [0x1]);
    }
    else {
        callback(false, [0x0, snapLocation, logLocation]);
    }
};
var down = function () { };
var up = function () { };
exports.snap = snap;
exports.down = down;
exports.up = up;
exports.init = init;



const fs = require("fs");

const logjs = require("logjs");
const logger = new logjs.logger('default');

const ncp = require("ncp")


let init = function () { };
let snap = function (msg: string) {
    return new Promise(function(resolve, reject) {
        // To throw an error, add reject. E.G. to throw a TypeError use reject(new TypeError("Something happened!")); // etc.
        let now = Date.now(); // Setting date.now in a variable is used for name consistency across program execution
        let logLocation = ".tig/logs/" + now + ".log";
        let snapLocation = ".tig/snaps/" + msg;
        // standard transport
        logger.transports.add(new logjs.transports.standard({
            colorized: true
        }));
        
        // any stream transport
        logger.transports.add(new logjs.transports.stream({
            stream: fs.createWriteStream(logLocation, {
                'flags': 'a',
            })
        }));
        // shell.exec("copy " + snapLocation);
        resolve([0x0, logLocation, snapLocation])
    }).catch((err) => logger.error("A tig error occured: " + err + ". Please see the owner of this program for more info") )

};
let down = function () { };
let up = function () { };
snap("Hi!")
    .then(function(result) {
        console.log("Success:\n" + result)
    })
exports.snap = snap;
exports.down = down;
exports.up = up;
exports.init = init;

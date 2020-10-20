#! /usr/bin/env node
{ // Setup
    var fs = require('fs');
    { // Logjs setup
        var logjs = require('logjs');
        var logger = new logjs.logger('default');
        var hi = "runk";
        { // Transports
            logger.transports.add(new logjs.transports.standard({
                colorized: true
            }));
            // any stream transport
            logger.transports.add(new logjs.transports.stream({
                stream: fs.createWriteStream('./logs/' + Date.now(), {
                    'flags': 'a'
                })
            }));
        }
    }
}
{ // Main
    console.log(hi);
}

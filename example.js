const tig = require("./bin/module"); // This is used inside the tig repo - change this to const tig = require("@samthegitguy/tig");
tig.snap("Initial Commit", function(err, result) {
    if (err) {
        console.err("An error occured! Please try again.");
    } else {
        console.log("Snap was saved in " + result[1]);
    }
})
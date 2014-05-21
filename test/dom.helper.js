var path = require("path");
var jsdom = require("jsdom");
var afPath = path.join(__dirname, "../appframework.js");

// app: app to load into the window
// jsFiles: array of paths to js files to load into the window;
// loads af core by default
module.exports = function (html) {
    if (!("window" in global)) {
        global.document = jsdom.jsdom("<app><head></head><body></body></app>");
        global.window = document.parentWindow;
        global.navigator = window.navigator;
        require(afPath);
        global.$ = window.$;
    }

    if (html) {
        window.document.querySelector("body").innerHTML = html;
    }
};

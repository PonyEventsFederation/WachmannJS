"use strict";
// @IMPORTS
var Application = require("./lib/Application");
var stage = (process.env.STAGE || process.env.NODE_ENV || "dev").toLowerCase();

Application.configure({
    rootDir: __dirname,
    modules_path: __dirname + "/modules",
    config_path: __dirname + "/config",
    stage: stage,
    logLevelConsole: stage == "dev" ? "debug" : "info",
    logLevelFile: stage == "dev" ? "info" : "info",
    logLevelRemote: stage == "dev" ? "debug" : "info",
    logformat: "DD.MM.YYYY HH:mm:ss",
    logDir: __dirname + "/logs",
    stages: [
        "prod",
        "dev"
    ]
});

// resources
//Application.registerModule("EMPTY");
Application.registerModule("Discord");
Application.registerModule("DevCommands");
Application.registerModule("Remote");
Application.registerModule("InterBotCom");
//Application.registerModule("Python");




Application.run();

process.on('SIGINT', function () {
    Application.stop();
});

process.on('exit', function () {
    Application.stop();
});

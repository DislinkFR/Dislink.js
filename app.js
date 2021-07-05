const axios = require("axios").default,
    configuration = require("./configuration.json")

class Main {
    constructor() {
        console.log(this.links)
        const _version = configuration.version;
        const _branch = configuration.branch;

        this.info = () => {
            console.log("#### Dislink.JS ####");
            console.log(`Version : ${_version}`);
            console.log(`Branche : ${_branch}`);
            console.log("#### ########## ####");
        }
    }
}

Main.links = require("./lib/links.js")

module.exports = Main
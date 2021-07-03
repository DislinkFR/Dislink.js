const axios = require("axios").default,
    configuration = require("./configuration.json"),
    FilterError = require("./error/filterError.js");


class Main {

    constructor() {
        const _version = configuration.version;
        const _branch = configuration.branch;

        this.info = () => {
            console.log("#### Dislink.JS ####");
            console.log(`Version : ${_version}`);
            console.log(`Branche : ${_branch}`);
            console.log("#### ########## ####");
        }
        this.links = async(option = {}) => {
            const filterOption = ["clicks", "name"];
            console.log(filterOption.includes(option.filter))
            if (option.filter && !filterOption.includes(option.filter)) {
                console.log("Unappropried filter.\n Try one of this list :\n" + filterOption.join(", "))
                return;
            }
            switch (option.filter) {
                case "clicks":
                    var list = await axios.get("https://api.dislink.fr/links/click");
                    break;
                case "name":
                    var list = await axios.get("https://api.dislink.fr/links/name");
                    break;
                default:
                    var list = await axios.get("https://api.dislink.fr/links/");
                    break;
            }

            return list.data;
        }
    }
}

module.exports = Main
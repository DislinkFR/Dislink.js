const axios = require("axios").default;

class Main {
    constructor() {
        this.version = "1.0"
    }
    links = async() => {
        var list = await axios.get("https://api.dislink.fr/links/");
        return list.data;
    }
}

module.exports = Main
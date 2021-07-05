const axios = require("axios").default

class links {
    constructor() {

    }
    fetch = async(option = {}) => {
        const filterOption = ["clicks", "name"];
        if (option.filter && !filterOption.includes(option.filter)) {
            console.log("Unappropried filter.\n Try one of this list :\n" + filterOption.join(", "))
            return;
        }
        switch (option.filter) {
            case "clicks":
                var list = await axios.get("https://api.dislink.fr/links/clicks");
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

module.exports = links
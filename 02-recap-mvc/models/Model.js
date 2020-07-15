const fs = require("fs");
const Person = require("./Person");

class Model {
    static show() {
        const data = JSON.parse(fs.readFileSync("./dataPerson.json", "utf-8"));

        let result = [];

        for(let i = 0; i < data.length; i++){
            let instancePerson = new Person(data[i].name, data[i].address, data[i].age);
            result.push(instancePerson);
        }

        return result;
        // * forEach()
    }
}


module.exports = Model;
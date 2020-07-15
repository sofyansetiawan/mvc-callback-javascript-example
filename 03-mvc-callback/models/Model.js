const fs = require("fs");
const Person = require("./Person");

class Model {
    static show(cb) {
        fs.readFile("./dataPerson.json", "utf-8", (err, data) => {
            if(err){
                cb(err, null);
            }
            else{
                data = JSON.parse(data);

                let result = [];

                for(let i = 0; i < data.length; i++){
                    let instancePerson = new Person(data[i].name, data[i].address, data[i].age);
                    result.push(instancePerson);
                }

                cb(null, result);

            }
        });
    }

    static add(dataPerson, cb){
        Model.show(function (error, data){
            if(error){
                cb(error, null);
            }
            else{

                const newPerson = new Person(dataPerson.name, dataPerson.address, dataPerson.age);

                data.push(newPerson);

                const newData = JSON.stringify(data, null, 2);
                
                fs.writeFile("./dataPerson.json", newData, (err) => {
                    if (err) cb(error, null);
                    cb(null, newPerson);
                });   
            }
        });
    }
}


module.exports = Model;
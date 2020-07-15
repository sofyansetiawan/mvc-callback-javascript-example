const Model = require("../models/Model");
const View = require("../views/View");

class Controller {
    static show() {
        Model.show(function (error, result){
            if(error){
                View.errorShow(error);
            }
            else{
                View.show(result);
            }
        });
        
    }

    static add(data) {
        if(data.length == 3){
            let dataPerson = {
                name: data[0],
                address: data[1],
                age: data[2]
            }

            Model.add(dataPerson, function (error, result){
                if(error){
                    View.errorAdd(error);
                }
                else{
                    View.showAdd(result);
                }
            });
        }
        
        
    }
}

module.exports = Controller;
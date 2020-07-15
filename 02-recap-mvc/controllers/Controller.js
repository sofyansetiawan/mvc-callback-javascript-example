const Model = require("../models/Model");
const View = require("../views/View");

class Controller {
    static show() {
        let result = Model.show();
        View.show(result);
    }
}

module.exports = Controller;
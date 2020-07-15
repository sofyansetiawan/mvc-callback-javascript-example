const Controller = require("./controllers/Controller");

const argv = process.argv;
const command = argv[2];
const param = argv.slice(3);

if(command === "show"){
    Controller.show();
}
else if(command == "add"){
    Controller.add(param);
}
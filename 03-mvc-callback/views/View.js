class View {
    static show(result) {
        console.table(result); // * array of object
    }

    static errorShow(error) {
        console.log("ERROR NIH APPSNYA..");
        console.log(error);
    }

    static showAdd(person) {
        console.log("BERHASIL nambah person");
        console.log(person);
    }

    static errorAdd(error) {
        console.log("ERROR Nambah person");
        console.log(error);
    }
}

module.exports = View;
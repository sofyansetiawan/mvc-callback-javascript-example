function namePerson(firstName, lastName, callback){
    if(firstName === undefined || lastName === undefined){
        callback("Nama depan dan belakang harus diisi", null);
    }
    else{
        callback(null, `${firstName} ${lastName}`);
    }
    // * tidak ada invoke callback
}

function greeting(param1, param2){
    if(param1){
        console.log(`pesannya adalah : ${param1}`);
        console.log("User Salah");
    }
    else{
        let hasil = param2.split(" ");
        console.log(hasil);
    }

}
// * formula kita

namePerson("Sofyan", "Setiawan", function displayName(error, result){
    if(error){
        console.log(error); //* result = null, error = isi
    }
    else{
        console.log(`Your name is ${result}`) // * error = null, result = f, l
    }
});
// namePerson(undefined, "Setiawan", greeting);
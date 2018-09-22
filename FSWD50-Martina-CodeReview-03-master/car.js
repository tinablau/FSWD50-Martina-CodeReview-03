function calculateInsurance() {

    var age = 0;
    var hp = 0;
    var valuesObject = {};
    var arrId = ["name", "age", "country", "hp"];
    for (i = 0; i < arrId.length; i++) {

        var item = document.getElementById(arrId[i]);

        valuesObject[item.id] = item.value;
    }

    var outputItem = document.getElementById("output");
    var result = 0;
    age = Number(valuesObject.age);
    hp = Number(valuesObject.hp);
    if (hp > 0 && age > 0) {
        if (valuesObject.country == "0") { // Austria 
            result = hp * 100 / age + 50;
        } else if (valuesObject.country == "1") { // Hungary
            result = hp * 120 / age + 100;
        } else if (valuesObject.country == "2") { // Greece
            result = hp * 150 / (age + 3) + 150;
        }
    }

    outputItem.innerText = valuesObject.name + ", your insurance costs " + Math.floor(result) + " €";
}
document.getElementById("subbut").addEventListener("click", calculateInsurance, false);
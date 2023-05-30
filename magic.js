let reader = new FileReader();
let cats, biomes, foods, mobs, animals, nether;
let r_cats = [], r_biomes = [], r_foods = [], r_mobs = [], r_animals = [], r_nether = [];
let userAdvancementFile;

let inputLabel = document.querySelector("#inputLabel");
let fileInput = document.querySelector("#fileInput");
fileInput.addEventListener("change", handleUserFile, false);
let result = document.querySelector("#result");

fetch("./1.19_cats.json")
    .then(response => response.json())
    .then(data => {
        cats = data;
    });

fetch("./1.19_biomes.json")
    .then(response => response.json())
    .then(data => {
        biomes = data;
    });

fetch("./1.19_foods.json")
    .then(response => response.json())
    .then(data => {
        foods = data;
    });

fetch("./1.19_mobs.json")
    .then(response => response.json())
    .then(data => {
        mobs = data;
    });

fetch("./1.19_animals.json")
    .then(response => response.json())
    .then(data => {
        animals = data;
    });

fetch("./1.19_nether.json")
    .then(response => response.json())
    .then(data => {
        nether = data;
    });

function capitalize(name){
    let words = name.split("_");
    words.forEach((element, index) => {
        words[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });
    return words.join(" ");
}

function handleUserFile(){
    const fileList = this.files[0];
    reader.readAsArrayBuffer(fileList);
    reader.addEventListener("loadend", () => {
        userAdvancementFile = JSON.parse(new TextDecoder().decode(reader.result))
        inputLabel.textContent = "File loaded!";
        inputLabel.classList.add("altButtonColor");
    });
}

function checkAdvancements(){
    if("minecraft:nether/explore_nether" in userAdvancementFile){
        nether.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:nether/explore_nether"]["criteria"])){
                r_nether.push(capitalize(element));
            }
        });
    } else {
        r_nether.push("You haven't made any progress in this advancement yet")
    }
    if(r_nether.length == 0){
        r_nether.push("Advancement completed");
    }


    if("minecraft:adventure/kill_all_mobs" in userAdvancementFile){
        mobs.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:adventure/kill_all_mobs"]["criteria"])){
                r_mobs.push(capitalize(element));
            }
        });
    } else {
        r_mobs.push("You haven't made any progress in this advancement yet")
    }
    if(r_mobs.length == 0){
        r_mobs.push("Advancement completed");
    }


    if("minecraft:husbandry/balanced_diet" in userAdvancementFile){
        foods.forEach(element => {
            if(! (element in userAdvancementFile["minecraft:husbandry/balanced_diet"]["criteria"])){
                r_foods.push(capitalize(element));
            }
        });
    } else {
        r_foods.push("You haven't made any progress in this advancement yet")
    }
    if(r_foods.length == 0){
        r_foods.push("Advancement completed");
    }


    if("minecraft:husbandry/complete_catalogue" in userAdvancementFile){
        cats.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:husbandry/complete_catalogue"]["criteria"])){
                r_cats.push(capitalize(element));
            }
        });
    } else {
        r_cats.push("You haven't made any progress in this advancement yet")
    }
    if(r_cats.length == 0){
        r_cats.push("Advancement completed");
    }


    if("minecraft:adventure/adventuring_time" in userAdvancementFile){
        biomes.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:adventure/adventuring_time"]["criteria"])){
                r_biomes.push(capitalize(element));
            }
        });
    } else {
        r_biomes.push("You haven't made any progress in this advancement yet")
    }
    if(r_biomes.length == 0){
        r_biomes.push("Advancement completed");
    }


    if("minecraft:husbandry/bred_all_animals" in userAdvancementFile){
        animals.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:husbandry/bred_all_animals"]["criteria"])){
                r_animals.push(capitalize(element));
            }
        });
    } else {
        r_animals.push("You haven't made any progress in this advancement yet")
    }
    if(r_animals.length == 0){
        r_animals.push("Advancement completed");
    }

    displayResults();
}


function displayResults() {
    let netherUL = document.createElement("ul")
    netherUL.textContent = "Hot tourist destinations - Biomes to visit:"
    result.appendChild(netherUL);

    let mobsUL = document.createElement("ul");
    mobsUL.textContent = "Monsters hunted - Mobs to kill:"
    result.appendChild(mobsUL);

    let foodsUL = document.createElement("ul");
    foodsUL.textContent = "A balanced diet - Food to eat:"
    result.appendChild(foodsUL);

    let catsUL = document.createElement("ul");
    catsUL.textContent = "Complete catalogue - Cats to tame:"
    result.appendChild(catsUL);

    let biomesUL = document.createElement("ul");
    biomesUL.textContent = "Adventuring time - Biomes to visit:"
    result.appendChild(biomesUL);

    let animalsUL = document.createElement("ul");
    animalsUL.textContent = "Two by two - Animals to breed:"
    result.appendChild(animalsUL);
    

    r_nether.forEach(element => {
        let netherLI = document.createElement("li");
        netherLI.textContent = element;
        netherUL.appendChild(netherLI);
    });

    r_mobs.forEach(element => {
        let mobsLI = document.createElement("li");
        mobsLI.textContent = element;
        mobsUL.appendChild(mobsLI);
    });

    r_foods.forEach(element => {
        let foodsLI = document.createElement("li");
        foodsLI.textContent = element;
        foodsUL.appendChild(foodsLI);
    });

    r_cats.forEach(element => {
        let catsLI = document.createElement("li");
        catsLI.textContent = element;
        catsUL.appendChild(catsLI);
    });

    r_biomes.forEach(element => {
        let biomesLI = document.createElement("li");
        biomesLI.textContent = element;
        biomesUL.appendChild(biomesLI);
    });

    r_animals.forEach(element => {
        let animalsLI = document.createElement("li");
        animalsLI.textContent = element;
        animalsUL.appendChild(animalsLI);
    });
}
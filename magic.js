let reader = new FileReader();
let cats, biomes, foods, mobs, animals, nether;
let r_cats = [], r_biomes = [], r_foods = [], r_mobs = [], r_animals = [], r_nether = [];
let userAdvancementFile;

let fileInput = document.querySelector("#fileInput");
fileInput.addEventListener("change", handleUserFile, false);

let results = document.querySelector("#results");

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

function handleUserFile(){
    const fileList = this.files[0];
    // console.log(uploadedFiles);
    reader.readAsArrayBuffer(fileList);
    reader.addEventListener("loadend", () => {
        userAdvancementFile = JSON.parse(new TextDecoder().decode(reader.result))
        // console.log(userAdvancementFile);
    });
}

function checkAdvancements(){
    //all this is placeholder btw
    // console.log("--Nether biomes left to visit--");
    if("minecraft:nether/explore_nether" in userAdvancementFile){
        nether.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:nether/explore_nether"]["criteria"])){
                // console.log(element + " not yet visited")
                r_nether.push(element);
            }
        });
    } else {
        r_nether.push("You haven't made any progress in this advancement yet")
    }


    // console.log("--Hostile mobs left to kill--");
    if("minecraft:adventure/kill_all_mobs" in userAdvancementFile){
        mobs.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:adventure/kill_all_mobs"]["criteria"])){
                // console.log(element + " not yet killed")
                r_mobs.push(element);
            }
        });
    } else {
        r_mobs.push("You haven't made any progress in this advancement yet")
    }


    // console.log("--Foods left to eat--");
    if("minecraft:husbandry/balanced_diet" in userAdvancementFile){
        foods.forEach(element => {
            if(! (element in userAdvancementFile["minecraft:husbandry/balanced_diet"]["criteria"])){
                // console.log(element + " not yet eaten")
                r_foods.push(element);
            }
        });
    } else {
        r_foods.push("You haven't made any progress in this advancement yet")
    }


    // console.log("--Cats left to tame--");
    if("minecraft:husbandry/complete_catalogue" in userAdvancementFile){
        cats.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:husbandry/complete_catalogue"]["criteria"])){
                // console.log(element + " not yet tamed")
                r_cats.push(element);
            }
        });
    } else {
        r_cats.push("You haven't made any progress in this advancement yet")
    }


    // console.log("--Biomes left to explore--");
    if("minecraft:adventure/adventuring_time" in userAdvancementFile){
        biomes.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:adventure/adventuring_time"]["criteria"])){
                // console.log(element + " not yet visited")
                r_biomes.push(element);
            }
        });
    } else {
        r_biomes.push("You haven't made any progress in this advancement yet")
    }


    // console.log("--Animals left to breed--");
    if("minecraft:husbandry/bred_all_animals" in userAdvancementFile){
        animals.forEach(element => {
            if(! (("minecraft:" + element) in userAdvancementFile["minecraft:husbandry/bred_all_animals"]["criteria"])){
                // console.log(element + " not bred yet")
                r_animals.push(element);
            }
        });
    } else {
        r_animals.push("You haven't made any progress in this advancement yet")
    }
    //so yucky
    console.log("Nether biomes remaining:");
    console.log(r_nether);
    console.log("Mobs remaining:");
    console.log(r_mobs);
    console.log("Foods remaining:");
    console.log(r_foods);
    console.log("Cats remaining:");
    console.log(r_cats);
    console.log("Biomes remaining:");
    console.log(r_biomes);
    console.log("Animals remaining:");
    console.log(r_animals);
}

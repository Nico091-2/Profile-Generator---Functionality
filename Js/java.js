let myVariable;
myVariable = "profileForm";

const nameText = document.getElementById("nameInput");

const age = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const submit = document.getElementById("submitBtn");

submit.addEventListener('click', function () {

    getInfo()
    console.log(nameText.value);

    output.innerHTML = 'Name:' + nameText + 'age:' + age + favPet

});



let pet = document.querySelectorAll('input[type="radio"]');
let hobby = document.querySelectorAll('input[type="Checkbox"]');

let favPet;
let hobbies = [];

function getInfo() {
    // reset hobbies array each tme value
    hobbies = [];

    // check for pets
    for (let i = 0; i < pet.length; i++) {
        if (pet[i].checked) {
            favPet = pet[i].value;
        }
    }
    console.log(favPet);

    // check hobbies
    for (let i = 0; i < hobby.length; i++) {
        //check for pets
        for (let i = 0; i < pet.length; i++) {
            if (pet[i].checked) {
                favPet = pet[i].value;
            }
        }
        console.log(favPet);

    }
}
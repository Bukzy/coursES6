const obj = {
    color:"blue"
}
console.log(obj.color); //blue


// destructuring ==>
const {color} = {
    color :"blue",
    state: undefined
};
console.log(color); //blue

//if you want more


const {name, preferedColor} = {
    name:"zoe",
    state:"NY",
    position:"forward",
    preferedColor:"green"
}
console.log(preferedColor);
console.log(name);

// common scenario

function generateObj(){
    return {
        name:"zoe",
        state:"NY",
        position:"forward",
        preferedColor:"green" 
    }
}
generateObj();
// if you only want the state or postion
const {state, position} = generateObj();
console.log(state); //NY
console.log(position); //forward

const {state:etat, position:where} = generateObj();
console.log(etat);//NY
console.log(where);//forward

// array

const [firstFruit,,thirdFruit,,fithFruit]= ["fraise","toto","ananas","bonobo","banane"]
console.log(firstFruit,thirdFruit,fithFruit);

// parcourir tableau d'object

const people =[
    {
        firstName : "Zoe",
        age:"29"
    },
    {
        firstName : "Manu",
        age:"26"
    },
    {
        firstName : "GEGE",
        age:"30"
    },
    {
        firstName : "Toto",
        age:"40"
    }
];

people.forEach( ( {age} )=>{
    // console.log(age);
})

const [,,GEGE] = people;

function logAge( {age} ){
    console.log(age);   
}
logAge(GEGE);



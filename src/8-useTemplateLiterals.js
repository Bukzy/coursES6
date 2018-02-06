var salutation = "bonjour";
// var greeting = salutation + ", Zoé" //avant

// apres
var greeting = `
${salutation}, 
        Zoé`;

// respecte les espaces, les sauts de ligne tab...
console.log(greeting);//
// bonjour, 
//         Zoé


var x = 1;
var y = 2;

var equation = `${ x } + ${ y } = ${ x + y }`;
console.log(equation); //1 + 2 = 3


function tag(strings, ...values){
    console.log(strings); //(2) ["It's ", " I'm sleepy", raw: Array(2)]
    console.log(values);   //[17] (il est 17h)
}
var message = tag `It's ${new Date().getHours()} I'm sleepy`;
console.log(message);



function tag1(strings, ...values){
    if(values[0]< 30){
        console.log(values[0]);
        values[1] = "need to recharge";
    } else {
        console.log(values[0]);
        values[1] = "charged";
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
var message1 = tag1 `It's ${Math.random()*100} I'm ${""}`
console.log(message1);

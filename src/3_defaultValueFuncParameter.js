// function receive(complete) {
//     complete();
// }
// receive(function(){
//     console.log("ttoot");    
// }) // ttoot


// function receive(complete = function(){
//     console.log('toto')
// }){
//     complete();
// };
// receive(); //toto

// ES6 function fléchée 
// function receive( complete = ()=> console.log('tata')) {
//     complete();
// };
// receive(); //tata



// not recomended
// let receive = (complete = ()=> console.log('salut')) => complete()
// receive(); //salut
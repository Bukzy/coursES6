
// // let keyword

// // var message ='hi';

// // {
// //     var message ='bye';
    
// // }

// // console.log(message); // => bye

// let messag ='hi';

// {
//     let messag ='bye';
//     console.log(messag); //=> bye
    
// }

// console.log(messag); // => hi

// var fs =[];
// // for (var i = 0; i < 10 ; i++) {
// //    fs.push(function(){
// //       console.log(i);   
// //    })   
// // }

// // console.log(i) // => 10
// // fs.forEach(function(f) {
// //     f(); // returne 10 fois 10!
// // }) 

// for (let i = 0; i < 10 ; i++) {
//    fs.push( ()=> console.log(i) )
// }
// // console.log(i); // undefined

// fs.forEach(function(f) {
//     f(); // 0 1 2 3 4 5 6 7 8 9 10
// }) 

// function varFunc(){
//     var previous = 0;
//     var current = 1;
//     var i;
//     var temp;

//     for(i = 0; i < 5; i++){
//         temp = previous;
//         previous = current;
//         current = temp + current;
//         console.log('i=' + i + 'temp='+ temp, 'previous='+previous, 'current='+current);
//         // return i= 0, temp=0 previous=1 current=1
//         // return i= 1, temp=1 previous=1 current=2
//         // return i= 2, temp=1 previous=2 current=3
//         // return i= 3, temp=2 previous=3 current=5
//         // return i= 4, temp=3 previous=5 current=8
//     }
//     console.log(i +' ' + temp); // 5 3
// }

// varFunc();

// function letFunc(){
//     var previous = 0;
//     var current = 1;

//     for(let i = 0; i < 5; i++){
//         let temp = previous;
//         previous = current;
//         current = temp + current;
//         console.log('i=' + i +'temp='+ temp, 'previous='+previous, 'current='+current);
//     }
//     // console.log(i+temp); //failed to compile
    
// }

// letFunc();
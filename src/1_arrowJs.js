// arrow function


// // var createGreeting = function(message,name){
// //     return message + name;
// // }

// // var arrowGeet = (message, name) => {
// //     return message + name;
// // }

// // var arrowGeet = (message, name) => message + name;

// // if only one parameter
// // var arrowGReet = message => 'hello';
// // var squared = x => x * x;

// // var deliveryBoy = {
// //     name:'john',
// //     handleMessage: function(message, handler) {
// //         handler(message);
// //     },

// //     receive: function(){
// //         var that = this;
// //         this.handleMessage("hello ,", function (message){
// //             that.name; //get the proper name
// //             console.log(message + that.name);
            
// //         })
// //     }
// // }

// deliveryBoy.receive();

var deliveryBoy = {
    name: 'john',
    handleMessage: (message, handler) => handler(message),

    receive:function(){
        this.handleMessage('hello , ', (message) => {
        console.log(message + this.name)
        })
    }
};

deliveryBoy.receive();
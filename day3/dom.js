// //object

// let car = {
//     //properties
//     color : "red",
//     brand : "bmw",
//     fuel : "petrol",

//     //methods or functions 
//     start : function (){
//         console.log("car started")
//     },
//     horn : function (){
//         console.log("HORN !!!")
//     },
//     stop : function (){
//         console.log("car stoped")
//     }
// }

// console.log(car);
// console.log(car.color);
// console.log(car.brand);
// console.log(car.fuel);


// car.start();
// car.horn();
// car.stop();


//get element by id.

let head1 = document.getElementById('head1');

//queryselectore basically select element like css selectors.

let head2  = document.querySelector('#head2')
let head3 = document.querySelector('.head3')
let head4 = document.querySelector('h4')

//maupulate the style

head1.textContent = "this is heading one of DOM";

//changing style property

head4.style.color = 'orange';
head4.style.fontSize = '30px';
head4.style.backgroundColor = 'green';

//add event listener

let finkey = document.querySelector('#findkey');

finkey.addEventListener('click', function(){
    let key = document.querySelector('#key');
    key.textContent = "this is car key";
    key.style.fontSize = '50px'
    key.style.color = 'purple'
    key.style.backgroundColor = 'orange';
})

let horn = document.querySelector('#horn');

horn.addEventListener('click', function () {
    let hornplease =  document.querySelector('#hronplease');
    hornplease.textContent = "HONK !! HONK !!"
    hornplease.style.fontSize = "40px";
    hornplease.style.color = 'red'; 
})






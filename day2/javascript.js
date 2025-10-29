function hello(){
    alert('hello this is external js');
}

//varibels

var username = "ashesh"
let age = 23;
const id = 12;


console.log(username, age, id);

//scope --> it which varibale is accessbel where

function animal() {
    let anm = "lion"
    console.log(anm);
}
animal();


//block scope

{
    let fruit = "mango";
    
    console.log(fruit);

    const animals = "tiger"
    console.log(animals)
}



let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

// and  = t t -> t or if any false will come it becom total fasle 
//or =f f -> then ti will false other wise for all ti will true.



let userage = 8;


if(userage >=18){
    console.log("you can vote")
}else{
    console.log("you can not vote")
}



//loops

//for loop

for(let i = 1; i<=10 ; i = i+1){
    console.log("hello everyone",i);
}


//while loop

let secretNumber = 7;
let guess = 1;
while (guess <= 10) {
     if (guess == secretNumber) {
      console.log("🎉 Secret number found ");
        break;  // Exit the loop when secret number is found
    }
    guess++; //updation guess = guess +1 
}





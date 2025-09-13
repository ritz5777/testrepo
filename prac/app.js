// const { jsx } = require("react/jsx-runtime");

// // // Defining class using es6
// class Vehicle {
    
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
    

//     getDetails() {
//         return (`The name of the bike is ${this.name}.`)
//     }


// }
// // Making object with the help of the constructor

// // when the object is declared the constructor runs automatically
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name);    // Hayabusa
// console.log(bike2.maker);   // Kawasaki
// console.log(bike1.getDetails());



// ======================


// class MyClass{
    
//     user = "none";

//     detail(){
//         console.log("the name of the user is ",this.user)
//     }
// }


// let obj = new MyClass();
// console.log(obj.user);

// obj.user = "sahil";
// obj.detail() 

// let obj2 = new MyClass();
// obj2.user="ritika";

// obj2.detail();

// ======================================================================

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();
console.log(myCar.show())



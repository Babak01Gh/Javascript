//? constructor functions

function ConstructorFunction(name,age){
    this.name = name,
    this.age = age,
    this.sayHello = function(){
        console.log(`hello ${this.name}`)
    }
}

const p2 = new ConstructorFunction('babak',19);
p2.sayHello()

// ? builtIn constructor functions

const strLit = 'babak';
const strObj = new String('babak');
console.log(strObj , typeof strObj); //! string{'babak'} object
console.log(strLit , typeof strLit); //! 'babak' string
console.log(strLit instanceof String) //! false
console.log(strObj instanceof String) //! true

const boolLit = true;
const boolObj = new Boolean(false);

const numLit = 20;
const numObj = new Number(19);

const arrLit = [1,2,3];
const arrObj = new Array([1,2,3]);
// ! WARNING
console.log(typeof arrLit); //! object
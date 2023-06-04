//? factory functions

function factoryFunction(name,age){
    return {
        name,
        age,
        sayHello(){
            console.log(`hello ${name}`);
        }
    };
};

const p1 = factoryFunction('babak',20);
p1.sayHello()

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

// ? dynamic nature of objects

const obj = {
    fullName : 'babak',
    age : 20
}

obj.city = 'tabriz'
delete obj.age

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty('city')); //! true.

console.log(obj);

// ? primitive and refrence dataType.

const mainName = 'babak';
let copyName = mainName;
copyName = 'babak2';
console.log(mainName);

const main = {
    name : 'babak',
    arr : [1,2,3],
}
// const copied = main
// copied.age = 20;
// console.log(main) //! it has age too (same refrence)

const secCopy = Object.assign({},main); //! shallow copy (first level copy).
secCopy.age = 20;
secCopy.arr.push('babak');
console.log(main) //! it doesnt get age but gets 'babak' in the arr because of first level copy

//TODO how to deep copy??????

const thirdCopy = JSON.parse(JSON.stringify(main))
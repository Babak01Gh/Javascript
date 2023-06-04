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
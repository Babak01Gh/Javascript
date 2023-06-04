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

console.log(obj);
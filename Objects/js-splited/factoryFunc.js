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
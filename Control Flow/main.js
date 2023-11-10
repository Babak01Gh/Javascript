// switch case
const userLevel = 'user';
switch (userLevel){
    case 'user':
        console.log('you are normal user');
        break;
    case 'admin':
        console.log('hello dear admin');
        break;
    default:
        console.log('excuse me something went wrong');
        break;
}

// for types
const arr = [11,12,14,15,16];
const obj = {
    userName : 'babak',
    greeting (){
        console.log(`hello ${this.userName}`);
    }
}
for (const i of arr){
    console.log(i);
}
for(const j in obj){
    console.log(j);
}
obj.greeting()

// do while
const i = 10;
do{
    console.log('Welcome dear');
} while( i >= 13)
//* uniQue map values

const piter = {name:'piter'},
john = {name:'john'},
herry = {name:'herry'},
babak = {name:'babak'},
leo = {name:'leonardo'};

const map = new Map([
    [piter,'admin'],
    [john,'teacher'],
    [herry,'student'],
    [babak,'admin'],
    [leo,'student']
]);
console.log(map);
for (const item of [...new Set(map.values())]){
    console.log(item);
}
// A.)
let str = 'In space, no one can hear you code.';
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
// B.)
const arr= ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' ') );
console.log(arr.join(''));
// C.)
console.log(str);
console.log(arr);
// D.)
let s="water,space suits,food,plasma sword,batteries";
const sa=s.split(',');
let res="";
for (let index = 0; index <sa.length; index++) {
    res+=sa[index]+' ';
   
}
 console.log(res);



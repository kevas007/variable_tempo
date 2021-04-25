let a = 1;
let b = 2;
let c = 3;
let temp;

temp = a;
a = b;
b = c;
c = temp;
console.log(a,b,c);

//exo1
//Afficher 4, 3, 2, 1
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let temp;

temp = a;
a = d;
d = temp;
temp = b;
b = c;
c = temp;

// // temp = a; methode hashimoto
// // a = c;
// // c = b;
// // b = a;
// // a = d;
// // d = temp;
console.log(a,b,c,d);

//exo2
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let temp;

temp = a;
a = b;
b = c;
c = d;
d = temp;
console.log(a,b,c,d);

//exo3
let tableau = [1, 2, 3, 4];
let temp;

temp = tableau[0];
tableau[0] = tableau[3];
tableau[3] = temp;
temp = tableau[1];
tableau[1] = tableau[2];
tableau[2] = temp;

console.log(tableau);

//exo4
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let temp;

temp = b;
b = e;
e = f;
f = c;
c = a;
a = d;
d = temp;
console.log(a,b,c,d,e,f);
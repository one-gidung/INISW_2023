let p2 = {
    a: {
        a1: {  a11 : 100, a12: 200 },
    },
    b : { b2:300}
}
let { a: { a1: { a12 } }, b:{b2} } = p2;
console.log(a12);
console.log(b2);
// (function Findg(p = 4877) {
//     let antiderivative = 0;
//     let dividers = GetDividersMinusOne(p - 1);
//     console.log(dividers)
//     let flag = false;
//     for (let i = 2; i <= p - 1; i++) {
//         for (let j = 0; j < dividers.length; j++) {
//             if ((i ** dividers[j]) - 1 % p !== 0) {
//                 flag = true;
//             } else {
//                 flag = false;
//                 break;
//             }
//             console.log(Math.abs((Math.pow(i, dividers[j]) - 1)))
//         }
//         if (flag === true) {
//             antiderivative = i;
//             flag = false;
//             break;
//         }
//     }
//     // console.log(dividers);
//     console.log(antiderivative)
// })();

// function GetDividersMinusOne(num) {
//     let res = [];
//     for (let n = 2; n < num; n++) {
//         let a = num % n;
//         if (a == 0) {
//             res.push(n)
//         }
//     }
//     return res;
// }




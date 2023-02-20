const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
const Pform = document.getElementById('P');
const Gform = document.getElementById('G');
const Aform = document.getElementById('a');
const Bform = document.getElementById('b');
const Kaform = document.getElementById('Ka');
const Kbform = document.getElementById('Kb');
const Yform = document.getElementById('y');
const Xform = document.getElementById('x');


function getFormValue(event) {
    event.preventDefault();
    const P = form.querySelector('[name="P"]').value;
    const G = +Findg(+P).toString().split('n').join('');
    const A = form.querySelector('[name="A"]').value;
    const B = form.querySelector('[name="B"]').value;

    Pform.innerHTML = P;
    Gform.innerHTML = G;
    Aform.innerHTML = A;
    Bform.innerHTML = B;
    SecretKeyGen(A, B, P, G);
}


function Findg(p) {
    p = BigInt(p);
    let antiderivative = BigInt(0);
    let dividers = GetDividersMinusOne(p - 1n);
    console.log(dividers)
    let flag = false;
    for (let i = 2n; i <= p - 1n; i++) {
        for (let j = 0n; j < dividers.length; j++) {
            if (((i ** dividers[j]) - 1n) % p !== 0n) {
                flag = true;
            } else {
                flag = false;
                break;
            }
            console.log((i ** dividers[j]) - 1n)
        }
        if (flag === true) {
            antiderivative = i;
            flag = false;
            break;
        }
    }

    console.log(antiderivative)
    return antiderivative;
};

function GetDividersMinusOne(num) {
    num = BigInt(num)
    let res = [];
    for (let n = 2n; n < num; n++) {
        let a = num % n;
        if (a == 0n) {
            res.push(n)
        }
    }
    return res;
}

function SecretKeyGen(privateA, privateB, P, G) {
    //генерирование секретных ключей после обмена публичными
    let keys = ComputePublicValues(P, G, privateA, privateB)

    Yform.innerHTML = keys[1];
    Xform.innerHTML = keys[0];



    let Ka = power(keys[1], privateA, P);
    let Kb = power(keys[0], privateB, P);

    Kaform.innerHTML = Ka;
    Kbform.innerHTML = Kb;

}

function ComputePublicValues(P, G, A, B) {
    let res = [];
    let x = 0;
    let y = 0;
    //Сгенерированный ключ для обмена
    x = Math.pow(G, A) % P;
    y = Math.pow(G, B) % P;
    res.push(x, y);

    return res;
}
function power(a, b, p) {
    if (b == 1)
        return a;
    else
        return ((Math.pow(a, b)) % p);
}


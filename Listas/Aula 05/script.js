// Crie uma função que calcule a soma de dois números.

function soma1() {
    function soma(a, b) {
        return a + b;
    }

    console.log(soma(8, 9));
    { }
};


// Escreva uma função que calcule o produto de três números. 

function prodTres() {
    function produto(a, b, c) {
        return a * b * c
    };
    console.log(produto(2, 4, 6));
};

// Crie uma função que verifique se um número é par ou ímpar. 
function parOuImpar() {
    function parImpar(a) {
        if (a % 2 == 0) {
            console.log(`${a} é um numero par`)
        } else {
            console.log(`${a} é um numero ímpar`)
        }

    }

    console.log(parImpar(3));
    console.log(parImpar(2));

};


// Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh"). 

function reversos() {

    function palavraReversa(palavra) {
        const palavraArray = palavra.split('');
        let palavraReversa = palavraArray.reverse().join('');
        console.log(palavraReversa)

    };

    // OU

    function reverseWord(palavra) {
        const palavraArray = palavra.split('');
        let palavraReversa = '';

        for (let i = palavraArray.length - 1; i >= 0; i--) {
            palavraReversa += palavraArray[i]
        }
        return palavraReversa
    };

    console.log(palavraReversa("hello"));
    console.log(reverseWord("world"));


}



// Crie uma função que retorne o maior valor de um array de números. 

function maiorNum() {
    function arrayMaiorNum(numeros) {

        let maxNum = numeros.reduce((max, current) => {
            if (current > max) {
                return current;
            } else {
                return max;
            };
        }, 0);

        console.log(`O maior número da array é ${maxNum}`);
    };

    console.log(arrayMaiorNum([0, 1, 28, 24, 35, 2, 3, 46, 7]));

};


// Escreva uma função que calcule a média de um array de números. 

function media() {
    function mediaArray(numeros) {
        let total = numeros.reduce((total, numero) => total + numero, 0);
        let divisor = numeros.length;
        console.log(`Media dos elementos da array = ${total / divisor}`);
    };

    console.log(mediaArray([1, 2, 3, 4, 5]));
};

// Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).

function palidrome() {
    function palidromo(palavra) {
        const palavraArray = palavra.split('');
        let palavraReversa = palavraArray.reverse().join('');

        if (palavra === palavraReversa) {
            console.log(`A palavra ${palavra} é um palíndromo`);
        } else {
            console.log(`A palavra ${palavra} não é um palíndromo`);
        };
    };
    console.log(palidromo("hannah"));
};

// Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.

function letras() {
    function letraPalavra(palavra, letra) {

        let palavraArray = palavra.split('');
        let contador = 0;

        for (let i in palavraArray) {
            console.log(palavraArray[i])
            if (palavraArray[i] == letra) {
                contador++;
            };

        };

        console.log(`A palavra ${palavra} tem a letra ${letra} ${contador} vezes`)
    };

    console.log(letraPalavra('palavra', 'a'));

};

// Crie uma função que calcule o fatorial de um número.

function fatorialE() {
    function fatorial(numero) {

        let numFatorial = [];

        for (let i = numero; i > 0; i--) {
            numFatorial.push([i]);
        }

        let fatorial = numFatorial.reduce((acumulador, numero) => acumulador *= numero, 1);

        return fatorial;
    }
    console.log(fatorial(5));
}

// Escreva uma função que converta graus Celsius para Fahrenheit.

function celsiusFahrenheit() {
    function temperatura(celsius) {
        let fahrenheit = ((celsius * 1.8) + 32).toFixed(1);

        return fahrenheit;
    };
    console.log(temperatura(21))
};

// Crie uma função que encontre o valor mínimo e máximo em um array de números.

function maiorMenorE() {
    function maiorMenor(numeros) {
        let maxNum = numeros.reduce((max, current) => {
            if (current > max) {
                return current;
            } else {
                return max;
            };
        }, 0);
        let menNum = numeros.reduce((men, current) => {
            if (current < men) {
                return current;
            } else {
                return men;
            };
        })

        console.log(`O maior número da array é ${maxNum}`);
        console.log(`O menor número da array é ${menNum}`);
    };

    console.log(maiorMenor([28, 24, 35, 46]));

};

// Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.

function fibonacciE() {
    function fibonacci(cont) {

        let n2 = 1;
        let n1 = 0;
        let prox;

        for (let i = 1; i <= cont; i++) {
            console.log(n1);
            prox = n1 + n2;
            n1 = n2
            n2 = prox
        };
    };

    console.log(fibonacci(10));
};

// Crie uma função que verifique se um número é primo.

function numeroPrimoE() {
    function numeroPrimo(numeroFornecido) {
        if (numeroFornecido < 0) {
            console.log("Não é possível verificar se este número é primo");

        } else {
            let divisores = 0;

            for (let i = 0; i <= numeroFornecido; i++) {
                if (numeroFornecido % i === 0) {
                    divisores++;
                };
            }

            if (divisores === 2) {
                console.log(`O número ${numeroFornecido} é primo.`);
            } else {
                console.log(`O número ${numeroFornecido} não é primo.`);
            };

        };
    };
    console.log(numeroPrimo(3));
};

// Escreva uma função que remova os elementos duplicados de um array.

function removedor() {
    function remove(array) {
        let newArray = [];
        for (let i in array) {
            if (!newArray.includes(array[i])) {
                newArray.push(array[i]);
            };
        };
        console.log(newArray)
    };
    console.log(remove([0, 1, 2, 3, 4, 5, 0, 2, 3, 5]));
}

// Crie uma função que ordene um array de números em ordem crescente.

function ordenacao() {
    function ordenar(numeros) {
        let numOrd = numeros.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        return numOrd
    };
    console.log(ordenar([0, 19, 1, 3, 5, 29]))
};


// Escreva uma função que retorne o número de dias entre duas datas.

function diferencaDatas() {

    function calcularDiferencaEmDias(data1, data2) {

        const primeiraData = new Date(data1);
        const segundaData = new Date(data2);

        const diferencaEmMilissegundos = Math.abs(primeiraData - segundaData);

        const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

        return dias;
    }


    const dataInicial = '2023-08-10';
    const dataFinal = '2023-07-30';
    const diferencaDias = calcularDiferencaEmDias(dataInicial, dataFinal);
    console.log(`A diferença em dias entre as datas é: ${diferencaDias} dias`);

};

// Crie uma função que calcule o raio de um círculo com base em sua área.

function area () {
    function circulo (area) {
        const raio = (area/(Math.PI)).toFixed(2);
        console.log (`O raio desse círculo é igual a ${raio}`)
    }

    circulo(31.5);
}

// Escreva uma função que encontre o segundo maior valor em um array de números.

function encontreSegundoMaior() {

    function segundoMaior(array) {

        const newArray = array.sort((a, b) => a - b);

        console.log (newArray)
        console.log(` O segundo maior número da array é ${newArray[(newArray.length)-2]}`);
    };

    segundoMaior([3,18,17,98,34,65]);
};


// Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.

function conversorE() {
    function conversor(dolar) {
        const real = (dolar * 4.94).toFixed(2);
        console.log(`${dolar} dólares equivalem a ${real}`)
    };

    conversor(10);
}

// Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).

function verificaAnagrama() {
    function saoAnagramas(str1, str2) {

        const cleanStr1 = str1.toLowerCase();
        const cleanStr2 = str2.toLowerCase();


        if (cleanStr1.length !== cleanStr2.length) {
            return false;
        }

        const charCount1 = {};
        const charCount2 = {};


        for (const char of cleanStr1) {
            charCount1[char] = (charCount1[char] || 0) + 1;
        }

        for (const char of cleanStr2) {
            charCount2[char] = (charCount2[char] || 0) + 1;
        }

        console.log(charCount1);
        console.log(charCount2);

        for (const char in charCount1) {
            if (charCount1[char] !== charCount2[char]) {
                return false;
            }
        }

        return true;
    }

    const string1 = "amor";
    const string2 = "roma";

    if (saoAnagramas(string1, string2)) {
        console.log("As strings são anagramas.");
    } else {
        console.log("As strings não são anagramas.");
    };

};
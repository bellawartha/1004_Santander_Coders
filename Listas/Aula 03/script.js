//Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

function estudante() {
    const estudante = {
        nome: 'Jubileu',
        idade: 18,
        curso: 'Javascript',
        notas: 8.5
    }

    console.log(estudante);

}


// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

function geografia() {
    const southAmerica = {
        Brasil: 'Brasília',
        Argentina: 'Buenos Aires',
        Uruguai: 'Montevideo',
        Paraguai: 'Assunção',
        Bolívia: 'La paz',
        Peru: 'Lima',
        Chile: 'Santiago',
        Equador: 'Quito',
        Colombia: 'Bogotá',
        Venezuela: 'Caracas',
        Guiana: 'Georgetown',
        GuianaFrancesa: 'Caiena',
        Suriname: 'Paramaribo'
    };

    const paisUser = prompt('Digite o nome de um país da América do Sul: ');

    for (let pais in southAmerica) {
        if (pais == paisUser) {
            alert(`País: ${pais}  Capital: ${southAmerica[pais]} `)
        }
    }

}


// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

function frutas() {
    const cesta = [
        { fruta: 'banana', valor: 5 },
        { fruta: 'mamão', valor: 8 },
        { fruta: 'maçã', valor: 10 },
        { fruta: 'laranja', valor: 4 },
    ];

    const totalCesta = cesta.reduce((total, fruta) => total + fruta.valor, 0);
    console.log(`O total da cesta de frutas é de R$${totalCesta}`);
}


// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

function biblioteca() {
    const livros = [
        { título: 'Dom casmurro', autor: 'Machado de Assis', publicação: '1889' },
        { título: 'Memórias póstumas de Brás Cubas', autor: 'Machado de Assis', publicação: '1881' },
        { título: 'Iracema', autor: 'José de Alencar', publicação: '1865' },
        { título: 'Noite na taverna', autor: 'Álvares de Azevedo', publicação: '1855' }
    ]

    for (let livro of livros) {
        console.log(`O livro ${livro.título} foi escrito por ${livro.autor} e publicado em ${livro.publicação}`)
    }
}

// Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.
function aoQuadrado() {
    const array = [2, 3, 4, 5];
    const newArray = array.map((numero) => Math.pow(numero, 2));
    console.log(newArray)
}


// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.
function novasPalavras() {
    const palavras = ["cachorro", "gato", "elefante", "leão"];

    const novoArray = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1));

    console.log(palavras)
    console.log(novoArray);

}


// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).
function frutasMap() {
    const frutas = [
        { fruta: 'banana', valor: 5, quantidade: 3 },
        { fruta: 'mamão', valor: 8, quantidade: 1 },
        { fruta: 'maçã', valor: 1, quantidade: 5 },
        { fruta: 'laranja', valor: 4, quantidade: 4 },
    ];

    const total = frutas.map((fruta) => {

        console.log(`${fruta.fruta}  total = ${fruta.valor * fruta.quantidade}`)
        return (fruta.valor * fruta.quantidade);
    });

    console.log (total);
}


// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

function temperaturaArray() {
    const celsius = [21, 32, 40, 5, 10];
    const fahrenheit = celsius.map((celsius) => (celsius * 9 / 5) + 32);
    console.log(fahrenheit)
}


// Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

function somaArray() {
    let numeros = [0, 1, 2, 3, 4];
    let total = numeros.reduce((total, numero) => total + numero, 0);
    console.log(`Soma de todos os elementos da array = ${total}`);
};

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

function concatArray() {
    let palavra = ['Com', 'pu', 'ta', 'dor'];
    let concat = palavra.reduce((acumulador, silabas) => acumulador + silabas)
    console.log(concat)
};


// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

function despesas() {

    const despesas = [
        { valor: 50, categoria: 'Alimentação' },
        { valor: 30, categoria: 'Transporte' },
        { valor: 80, categoria: 'Alimentação' },
        { valor: 25, categoria: 'Outros' },
        { valor: 40, categoria: 'Transporte' }
    ];

    const categoriaEscolhida = 'Alimentação';

    const totalDespesas = despesas.reduce((total, despesa) => {
        if (despesa.categoria === categoriaEscolhida) {
            return total + despesa.valor;
        }
        return total
    }, 0);

    console.log(`Total de despesas na categoria "${categoriaEscolhida}": R$${totalDespesas}`);

}



// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

function maiorNum() {
    let numeros = [0, 11, 52, 35, 4, 10];

    let maxNum = numeros.reduce((max, current) => {

        if (current > max) {
            return current;
        } else {
            return max;
        };

    }, 0);

    console.log(`O maior número da array é ${maxNum}`);
};


// Laços de Repetiçoes

// 13- Imprima os números de 1 a 10 utilizando um loop for.

function for1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    };
};

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

function for1a20() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    };
};

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

function soma1a50() {
    let soma = 0;
    for (let i = 1; i <= 50; i++) {
        soma += i;
    };
    console.log(soma);
};

// 16- Imprima a tabuada do 7 utilizando um loop for.

function tabuada7() {
    console.log('Tabuada do 7');
    for (let i = 0; i <= 10; i++) {
        let mult = 7 * i;
        console.log(`7  x  ${i}  = ${mult}`);
    };
};


// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

function numUser() {
    let numUser = prompt('Digite um número: ');
    for (let i = 1; i <= numUser; i++) {
        console.log(i);
    };
};


// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

function numeroPrimo() {
    let numeroFornecido = prompt("Digite um número: ");
    if (numeroFornecido < 0) {
        alert("Não é possível verificar se este número é primo");

    } else {
        let divisores = 0;

        for (let i = 0; i <= numeroFornecido; i++) {
            if (numeroFornecido % i === 0) {
                divisores++;
            };
        }

        if (divisores === 2) {
            alert(`O número ${numeroFornecido} é primo.`);
        } else {
            alert(`O número ${numeroFornecido} não é primo.`);
        };

    };
};


// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

function fibonacci() {
    let n2 = 1;
    let n1 = 0;
    let prox;

    for (let i = 1; i <= 10; i++) {
        console.log(n1);
        prox = n1 + n2;
        n1 = n2
        n2 = prox
    };
};


// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

function fatorial() {
    let num = Number(prompt('Digite um número: '));
    let fatorial = 1;
    for (let i = num; i > 0; i--) {
        fatorial *= i;
        console.log(i);
    };

    console.log(`O fatorial de ${num} é igual a ${fatorial}`);
};


// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

function soma1a15() {
    let soma = 0;
    for (let i = 1; i <= 15; i++) {
        soma += i;
        console.log(soma);
    };

};


// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

function numPerfeito() {
    let numerosPerfeitos = [];

    for (let i = 1; i <= 1000; i++) {
        let divisores = [];

        for (let j = i - 1; j >= 0; j--) {
            if (i % j == 0) {
                divisores.push(j);
            };
        };

        let somaDivisores = divisores.reduce((total, numero) => total + numero, 0);

        if (i == somaDivisores) {
            numerosPerfeitos.push(i);
        };
    };

    console.log(numerosPerfeitos)
};


// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

function mentalista() {
    let num = Math.floor(1 + (Math.random() * 100));
    let numUser;

    do {

        numUser = prompt("Digite um número de 1 a 100: ");

        if (numUser < num) {
            alert('O número a ser adivinhado é maior do que o que você digitou');
        } else if (numUser > num) {
            alert('O número a ser adivinhado é menor do que o que você digitou');
        }

    } while (numUser != num);

    alert('Parabéns! Você acertou! O número era ' + num);
};

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

function fibonacciWhile() {
    let n1 = 0;
    let n2 = 1;
    let prox;

    while (n1 <= 1000) {
        console.log(n1);
        prox = n1 + n2;
        n1 = n2;
        n2 = prox;
    }

}

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

function mediaLista() {
    let numIndice = prompt('Quantos números voce vai fornecer?');
    let listaNum = [];

    for (let i = 1; i <= numIndice; i++) {
        let numUser = Number(prompt('Digite um número: '));
        listaNum.push(numUser);
    };

    let soma = listaNum.reduce((acumulador, numero) => acumulador + numero);
    let media = soma / numIndice;

    console.log(`A soma dos números ${listaNum} é ${soma}`)
    console.log(`A média da soma dos números da lista é ${media}`);
};

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// REPETIDA

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

function primosUser() {
    let numUser = prompt('Digite um número: ');
    let primos = [];

    for (let i = numUser; i > 0; i--) {

        let divisores = 0;

        for (let j = i; j > 0; j--) {

            if (i % j == 0) {
                divisores++;
            };

        };

        if (divisores == 2) {
            primos.push(i);
        };

    };

    console.log(`De 1 a ${numUser} os números primos são: ${primos.reverse()}`);
};

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

function pares() {
    let contador = 0;
    console.log('Números pares: ')
    while (contador < 11) {
        if (contador % 2 == 0) {
            console.log(contador)
        };

        contador++;
    };
};


// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

function potenciaUser() {
    let numInicial = prompt('Digite um número: ');
    let exponenciador = 0;
    let numUser = numInicial;

    if (numUser % 2 == 0) {
        do {
            numUser = numUser / 2;
            exponenciador++;

        } while (numUser % 2 == 0);

        if (numUser == 1) {
            alert(`O número ${numInicial} é resultado da potenciação do número 2 elevado a ${exponenciador}`);
        } else {
            alert(`O número ${numInicial} não é potência de 2`);
        };

    } else {
        alert(`O número ${numInicial} não é potência de 2`)
    };

};

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

function somaWhile() {
    let contador = 1;
    let soma = 0;
    while (contador <= 100) {
        soma += contador;
        contador++;
    }

    console.log(soma);
}


// Condicionais

// 31- Verificação de vogal ou consoante
// Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

function vogalConsoante() {
    let letraUser = (prompt('Digite uma letra: '));
    let letra = letraUser.toUpperCase();

    if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
        alert(`A letra ${letra} é uma vogal`);
    } else {
        alert(`A letra ${letra} é uma consoante`);
    };

};


// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.

function calculadoraSimples() {
    let num1 = Number(prompt('Digite um número: '));
    let num2 = Number(prompt('Digite outro número: '));
    let operador = prompt('Digite + se quiser somar os números, - se quiser subtrairs, * se quiser multiplicar e / se quiser dividir: ');

    if (operador == '+') {
        alert(`Resultado da soma: ${num1 + num2}`);
    } else if (operador == '-') {
        alert(`Resultado da subtração: ${num1 - num2}`);
    } else if (operador == '*') {
        alert(`Resultado da multiplicação: ${num1 * num2}`);
    } else if (operador == '/') {
        alert(`Resultado da divisão: ${num1 / num2}`);
    } else {
        alert('Operador inválido');
    };

}
;
// OU
function calculadoraSimples2() {
    let num1 = Number(prompt('Digite um número: '));
    let num2 = Number(prompt('Digite outro número: '));
    let operador = prompt('Digite + se quiser somar os números, - se quiser subtrairs, * se quiser multiplicar e / se quiser dividir: ');

    switch (operador) {
        case '+':
            alert(`Resultado da soma: ${num1 + num2}`);
            break;

        case '-':
            alert(`Resultado da subtração: ${num1 - num2}`);
            break;

        case '*':
            alert(`Resultado da multiplicação: ${num1 * num2}`);
            break;

        case '/':
            alert(`Resultado da divisão: ${num1 / num2}`);
            break;

        default:
            alert('Operador inválido');
    }
}


// 33- Verificação de número primo

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.

function numeroPrimo2() {

    let numeroFornecido = prompt("Digite um número: ");

    if (numeroFornecido < 0) {
        alert("Não é possível verificar se este número é primo")

    } else {
        let divisores = 0;
        let contador = 0;

        while (contador <= numeroFornecido) {

            if (numeroFornecido % contador === 0) {
                divisores++;
            }
            contador++;
        }

        if (divisores === 2) {
            alert(`O número ${numeroFornecido} é primo.`)
        } else {
            alert(`O número ${numeroFornecido} não é primo.`)
        }

    }
}


// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.

function temperatura() {
    let celsius = Number(prompt('Digite o grau em Celsius: '));
    let conversao = (prompt('Digite F se quiser transformar para Fahrenheit ou digite K se quiser transformar para Kelvin: ')).toUpperCase();

    if (conversao === 'F') {
        let fahrenheit = ((celsius * 1.8) + 32).toFixed(1);
        alert(`${fahrenheit}°F graus`)
    } else if (conversao === 'K') {
        let kelvin = celsius + 273
        alert(`${kelvin}°K graus`)
    } else {
        alert('Unidade de conversão inválida')
    }

}


// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

function diaSemana() {
    let numDia = prompt('Digite um número de 1 a 7 correspondente a um dia da semana: ');
    switch (numDia) {
        case '1':
            alert('Domingo');
            break;
        case '2':
            alert('Segunda-feira');
            break;
        case '3':
            alert('Terça-feira');
            break;
        case '4':
            alert('Quarta-feira');
            break;
        case '5':
            alert('Quinta-feira');
            break;
        case '6':
            alert('Sexta-feira');
            break;
        case '7':
            alert('Sábado');
            break;
        default:
            alert('Número inválido')
    }

}


// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.

function anoBissexto() {
    let ano = Number(prompt("Digite um ano:"));
    if (ano % 4 == 0 || !ano % 100 == 0 && ano % 400 == 0) {
        alert(`${ano} é um ano bissexto`);
    } else {
        alert(`${ano} não é um ano bissexto`);
    };
};

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.

function contadorVogaisConsoantes() {
    let palavra = (prompt('Digite uma palavra: ')).toUpperCase();
    let palavraArray = palavra.split('');
    let vogais = 0;
    let consoantes = 0;

    for (let letra of palavraArray) {
        if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
            vogais++;
        } else {
            consoantes++;
        };
    };

    alert(`A palavra ${palavra} tem ${vogais} vogais e ${consoantes} consoantes.`);

};

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.

function verificador() {
    let num = prompt('Digite um número');

    if (num > 0) {
        alert(`O número ${num} é um número positivo`);
    } else if (num == 0) {
        alert(`O número ${num} é zero`);
    } else if (num < 0) {
        alert(`O número ${num} é um número negativo`);
    } else {
        alert('Número inválido');
    };

};


// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.

function bilheteCinema() {
    let idade = Number(prompt('Digite sua idade: '));

    if (idade < 18) {
        alert('Sua entrada custará 5 reais');
    } else {

        let carteiraEstudante = (prompt('Tem carteira de estudante? Responda sim ou não.')).toUpperCase();

        if (carteiraEstudante == "SIM") {
            alert('Sua entrada custará 8 reais');
        } else {
            alert('Sua entrada custará 10 reais');
        }
    }
}

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.

function palindromo() {
    let palavra = prompt('Digite uma palavra: ');
    const palavraArray = palavra.split('');
    let palavraReversa = '';

    for (let i = palavraArray.length - 1; i >= 0; i--) {
        palavraReversa += palavraArray[i]
    }

    if (palavra === palavraReversa) {
        alert(`A palavra ${palavra} é um palíndromo`);
    } else {
        alert(`A palavra ${palavra} não é um palíndromo`);
    };

};

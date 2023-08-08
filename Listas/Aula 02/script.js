// Lista - aula 02

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

function retangulo() {
    let altura = prompt('Digite a altura do retângulo em metros: ');
    let largura = prompt('Digite a largura do retângulo em metros: ');
    let area = altura * largura;
    console.log(`A área do retangulo é de ${area}`);
};


// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%). 

function imparOuPar() {
    let num = Number(prompt("Digite um número: "));
    if (num % 2 == 0) {
        alert("Esse número é par")
    } else {
        alert("Esse número é ímpar")
    };

};



// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

function verificar() {
    const infoUser = prompt('Digite uma palavra ou frase: ');
    const palavra = 'JavaScript';
    if (infoUser.includes(palavra)) {
        alert("Você digitou a palavra JavaScript em algum momento");
    } else {
        alert("Você não digitou a palavra JavaScript em nenhum momento");
    };
};


// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

function comparativo() {
    const string1 = 'Eu amo JavaScript';
    const string2 = 'Eu odeio JavaScript';
    const string3 = 'eu amo javascript';
    const compare = string1 == string2;
    const compare2 = string1.toUpperCase() == string3.toUpperCase();


    console.log(compare)
    console.log(compare2)
}


// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

function concatenacao() {
    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6, 7, 8];
    const array3 = array1.concat(array2);
    console.log(array3);
};

//Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. 

function media() {
    let numeros = [0, 1, 2, 3, 4];
    let total = numeros.reduce((total, numero) => total + numero, 0);
    let media = total / numeros.length;
    console.log(`Média da array = ${media}`);
};

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo". 

function data() {
    const data = new Date();
    console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} Hora: ${data.getHours()}:${data.getMinutes()}`);
};

// ou

function data2() {
    const date = new Date();
    console.log(new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Sao_Paulo' }).format(date));
};


// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

function maiorValor() {
    const num = [3, 5, 20, 9, 10];
    const maiorValor = Math.max.apply(null, num);
    console.log(maiorValor)
};


// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 

function geradorNum() {
    const numero = Math.floor(1 + (Math.random()) * 10);
    console.log(numero);

}


// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.


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

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
function multiplicacao() {
    let num = 2;
    let string = "5";
    console.log(num * string);
    console.log("Como o Javascript é uma linguagem de tipagem fraca pode ocorrer a conversão de tipos automaticamente, isso seria a coerção de tipos implícita. Neste caso específico a multiplicação é algo que só pode ocorrer com varíaveis do tipo number e como a String contém o número 5 em seu interior e é passível de ser convertida para um número, ocorre a conversão implícita.");
};


// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável. 

function stringToNum() {
    let string = "123";
    let num = Number(string);
    console.log(`A varíavel com o valor ${string} é do tipo ` + typeof string);
    console.log(`A varíavel com o valor ${num} é do tipo ` + typeof num);
};


// 13- Escreva um programa que adicione um número e uma string. 
// 14- Explique o resultado e discuta a coerção que ocorre.

function concatStringNum() {
    let num = 1;
    let string = "10";
    let soma = num + string;
    console.log(`A varíavel com o valor ${soma} é do tipo ` + typeof soma);
    console.log(`A soma entre a varíavel num de valor ${num} e a varíavel string com valor de ${string} é produto de uma concatenação. Isso ocorre por que o sinal de + além de fazer soma de números, faz a concatenação de strings. Nesse caso ocorre a conversão implícita do número para string e por isso o resultado é ${soma}`);

};


// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

function nullUndefined() {
    let nulo = null;
    let und = undefined;

    console.log(nulo + " " + typeof nulo);
    console.log(und + " " + typeof und);

    if (nulo == und && typeof nulo == typeof und) {
        console.log("As variáveis null e und são iguais em valor e tipo");
    } else {
        console.log("As variáveis null e und não são iguais em valor e tipo");
    };
};


// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

    function isFunction () {
        let funcao = function () {};
        console.log ("A variável funcao é do tipo " + typeof funcao)

    }



// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

function calculo() {
    let calculo = (10 + 5) * (3 / 20);
    console.log(calculo);
};



// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo. 

function numeroImpar() {
    let num = Number(prompt("Digite um número"));
    if (num % 2 == 1 && num > 0) {
        alert(`${num} é um número ímpar e positivo`)
    } else {
        alert(`${num} não é um número ímpar ou um número positivo`)
    };
};


// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

function anoBissexto() {
    let ano = Number(prompt("Digite um ano:"));
    if (ano % 4 == 0 || !ano % 100 == 0 && ano % 400 == 0) {
        alert(`${ano} é um ano bissexto`);
    } else {
        alert(`${ano} não é um ano bissexto`);
    };
};

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

function entradaClube() {
    let idade = Number(prompt("Digite sua idade: "));
    let nome = prompt('Digite seu nome: ');
    let membrosBanidos = ["José", "Maria", "João", "Matheus"];

    if (idade >= 18 && !membrosBanidos.includes(nome)) {
        alert('Seja bem vindo!');

    } else {
        alert('Você não pode entrar no clube!');
    };

};

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.

function login() {
    let usuario = prompt('Usuário: ');
    let senha = prompt('Senha: ');

    if (usuario.trim() === '' || senha.trim() === '') {
        alert('Você deixou um dos campos em branco');
    } else if (senha.length < 8) {
        alert('Sua senha deve ter pelo menos 8 caracteres');
    } else if (usuario.length < 4) {
        alert('Seu usuário deve ter pelo menos 4 caracteres');
    }
    else {
        alert('Login feito com sucesso');
    };

};
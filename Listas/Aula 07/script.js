// ## Callback
// Exercício 1: Callback Básico
// Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.

function ex1Callback() {

    function callback() {
        const message = "hello, world!";
        return message;
    };

    function executarCallback(callback) {
        console.log(callback);
    };

    executarCallback(callback());

};


// Exercício 2: Manipulação de Array
// Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.

function ex2Callback() {

    function dobrarNumeros(numeros, callback) {
        let numerosDobrados = [];
        for (let i in numeros) {
            numerosDobrados.push(callbackNum(numeros[i]));
        }

        console.log(`Números dobrados: ${numerosDobrados}`);
    }

    function callbackNum(numero) {
        let dobrado = numero * 2;
        return dobrado;
    };

    dobrarNumeros([2, 4, 6, 8, 10], callbackNum);
};


// Exercício 3: Filtragem com Callback
// Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.

function ex3Callback() {
    function filtrarPalavras(palavras, callback) {
        const novasPalavras = [];
        for (let i in palavras) {
            if (callback(palavras[i])) {
                novasPalavras.push(palavras[i]);
            };
        };

        console.log(novasPalavras);
    };

    function filtro(palavra) {
        if (palavra.length === 4) {
            return true;
        } else {
            return false;
        };
    };

    filtrarPalavras(['amor', 'roma', 'amora', 'jogo', 'inglês', 'para'], filtro);
};

// Exercício 4: Ordenação com Callback
// Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.

function ex4Callback() {

    function ordenarNumeros(array, callback) {
        const arrayOrdenada = callback(array);
        console.log(arrayOrdenada);
    };

    function ordenacao(array) {
        const newArray = array.sort((a, b) => a - b);
        return newArray;
    };

    ordenarNumeros([4, 2, 3, 8, 10, 9, 1, 5], ordenacao);
};


// Exercício 5: Timer com Callback
// Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.

function ex5Callback() {

    function executarAposTempo(callback, tempo) {

        setTimeout(() => { callback() }, tempo);

    };

    function message() {
        console.log('Essa mensagem demorou 2 segundos para aparecer');
    };

    executarAposTempo(message, 2000);

};


// ## Promise
// Exercício 1: Criando uma Promise Simples
// Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.

function ex1Promise() {

    const minhaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Esta é a minha promise";
            resolve(message);
        }, 1000);

    });

    minhaPromise
        .then(message => {
            console.log(message);
        });

};


// Exercício 2: Tratamento de Erro em Promise
// Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)

function ex2Promise() {

    const mensagem = new Promise((resolve, reject) => {

        const soma = 8 + 0;

        const acerto = "A operação foi realizada com sucesso";
        const erro = "A operação deu errado";
        if (!soma == 8) {
            resolve(acerto);
        } else {
            reject(erro);
        };

    });

    mensagem
        .then(mensagem => {
            console.log(mensagem);
        })

        .catch(erro => {
            console.log(erro);
        });
};

// Exercício 3: Encadeamento de Promises
// Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.


function ex3Promise() {

    function getApi() {
        return new Promise((resolve, reject) => {

            fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
                .then(response => response.json())
                .then(items => {
                    let pokemon = [];
                    let lista = items.results;
                    lista.map(item => pokemon.push(item.name));
                    console.log('Executando primeira promise');
                    resolve(pokemon);
                    reject(new Error('Pane no sistema algúem me desconfigurou 1'));
                });


        });

    };

    function batalha(pokedex) {
        return new Promise((resolve, reject) => {
            let escolhidos = [];
            let erro = 'Pane no sistema algúem me desconfigurou 2';
            console.log('Executando segunda promise');
            for (let i = 0; i <= 2; i++) {
                escolhidos.push(pokedex[Math.floor((Math.random()) * pokedex.length)]);
            }

            resolve(escolhidos);
            reject(erro);
        });
    };

    getApi()
        .then(pokemon => {
            console.log('Primeira promise resolvida');
            return batalha(pokemon);
        })
        .catch(erro => console.log(` esse é o erro: ${erro} `))
        .then(escolhidos => {
            console.log('Segunda promise resolvida');
            console.log('Os pokemons escolhidos para a batalha são:');
            for (let i in escolhidos) {
                console.log(escolhidos[i]);
            };
        })
        .catch(erro => console.log(` esse é o erro: ${erro} `));

};

// Exercício 4: Promessa com Atraso Aleatório
// Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.


function ex4Promise() {
    function atrasoAleatorio() {
        return new Promise((resolve, reject) => {
            const time = (Math.floor(1 + (Math.random()) * 5)) * 1000;
            console.log(`A mensagem irá aparecer em ${time} milissegundos`);
            setTimeout(() => {
                let message = 'Aqui está a mensagem';
                resolve(message);
                reject(console.log('A operação não foi finalizada'));
            }, time);
        });
    };

    atrasoAleatorio()
        .then(mensagem => console.log(mensagem))
        .catch(erro => console.log(erro));
};

// Exercício 5: Rejeição de Promessa
// Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.


function ex5Promise() {
    function rejeicaoAleatoria() {
        return new Promise((resolve, reject) => {
            const time = (Math.floor(1 + (Math.random()) * 5)) * 1000;
            console.log(`A mensagem irá aparecer em ${time} milissegundos`);
            setTimeout(() => {
                let message = 'Aqui está a mensagem';
                let erro = 'Deu ruim';
                let validador = false;
                if (validador) {
                    resolve(message);
                } else {
                    reject(erro);
                };
            }, time);
        })
    }
    rejeicaoAleatoria()
        .then(mensagem => console.log(mensagem))
        .catch(erro => console.log(`Deu erro, ${erro}`));
};

// ## async e await
// Exercício 1: Função Assíncrona Simples
// Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.

function ex1Async() {

    function timeOut() {    
       return new Promise ((resolve)=> {
        setTimeout(() => {
            const message = 'Hello , world.  Async/await'
            resolve (message);
    }, 2000);
       }) 
       
    }
    async function simples() {
        console.log ('começou função async');
        var x = await timeOut ();
        console.log (x);
        console.log ('Acabou minha função assíncrona')
    };

    simples();
};


// Exercício 2: Tratamento de Erros com async/await
// Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.

function ex2Async() {
    async function erros() {
        try {
            const api = await fetch ('https://www.fruityvice.com/api/fruit/all');
            const response = await api.json();
            console.log (response)
        } catch (error) {
            console.log (`Não foi possível recuperar esses dados por causa desse erro: ${error}`)
        }
    };

    erros();
};


// Exercício 3: Encadeamento com async/await
// Crie uma série de funções assíncronas que dependem dos resultados anteriores.

function ex3Async() {

    async function api() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
        const lista = await response.json();
        const pokedex = lista.results;
        return pokedex
    };

    async function pokemon () {
        const pokemons = await api();
        const nomes = pokemons.map(nome => nome.name);
        return nomes
    };
    
    async function batalha () {
        const listaNomesPokes = await pokemon ();
        let escolhidos = []
        for (let i= 0; i<=2; i++) {
            escolhidos.push(listaNomesPokes[Math.floor((Math.random()) * listaNomesPokes.length)]);
        };
        return escolhidos
    };

    async function exibicao() {
        const lutadores = await batalha ();
        const oponentes = await batalha ();

        console.log('Os pokemons escolhidos para a batalha são:');
        for (let i in lutadores) {
            console.log(lutadores[i]);
        };
        console.log(' ')
        console.log ('#######################################')
        console.log(' ')
        console.log('Seus oponentes são:');
        for (let i in oponentes) {
            console.log(oponentes[i]);
        };
    };

    exibicao ();
};



// Exercício 5: Consumindo API com async/await
// Crie uma função que utiliza fetch com async e await para buscar dados de uma API.

function ex4Async() {
    async function api() {
        const response = await fetch('https://swapi.dev/api/people/');
        const people = await response.json();
        console.log(people);
    };

    api();
};
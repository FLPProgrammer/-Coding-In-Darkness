
/*
==========================================
Exercício 1 - Array Destructuring
==========================================
*/

/*const languages = ['typescript', 'javascript', 'python'];

const first = languages[0];
const second = languages[1];
const third = languages[2];

const [firstLanguage, secondLanguage, thirdLanguage] = languages;

console.log(first, firstLanguage);
console.log(second, secondLanguage);
console.log(third, thirdLanguage);*/


/*
==========================================
Exercício 2 - Array Destructuring com Posição Ignorada
==========================================
*/

/*const frameworks = ['React', 'Next.js', 'Angular', 'Vue'];

const [firstFrame, , thirdFrame] = frameworks;

console.log(firstFrame);
console.log(thirdFrame);*/


/*
==========================================
Exercício 3 - Object Destructuring
==========================================
*/

/*const userObject = {
    name: 'Felipe',
    age: 26,
    role: 'Developer'
};

const {
    name: nameObject,
    age: ageObject,
    role: roleObject
} = userObject;

console.log(nameObject);
console.log(ageObject);
console.log(roleObject);*/


/*
==========================================
Exercício 4 - Object Destructuring com Renomeação,
Valor Padrão e Aninhamento
==========================================
*/

/*const developer = {
    name: 'Felipe',
    language: 'TS',
    framework: undefined,
    skills: {
        frontend: 'React',
        backend: 'Node.js'
    }
};

const {
    name: nameDeveloper,
    language: languageDeveloper,
    framework = 'React',
    skills: {
        frontend: frontendSkill,
        backend: backendSkill
    }
} = developer;

console.log(nameDeveloper);
console.log(languageDeveloper);
console.log(framework);
console.log(frontendSkill);
console.log(backendSkill);*/


/*
==========================================
Exercício 5 - Spread Operator em Arrays
==========================================
*/

/*const frontend = ['HTML', 'CSS', 'JS'];
const backend = ['Node.js', 'Express'];

const allTechnologies = [...frontend, ...backend];
const updatedTechnologies = [...allTechnologies, 'Next.js'];

console.log(allTechnologies);
console.log(updatedTechnologies);*/


/*
==========================================
Exercício 6 - Spread Operator em Objetos
==========================================
*/

/*const developerObject = {
    name: 'Negão',
    role: 'Developerzada junto com o Marquinhos'
};

const newDeveloperObject = { ...developerObject };

const updatedNewDeveloperObject = {
    ...newDeveloperObject,
    level: 'sênior'
};

const rewrittenPropertiesDeveloper = {
    ...developerObject,
    name: 'Marcola coda 200 linhas por segundo depois de 500mg de cafeína',
    role: 'Professor do Felipe, fuma e coda'
};

console.log(newDeveloperObject);
console.log(updatedNewDeveloperObject);
console.log(rewrittenPropertiesDeveloper.name);
console.log(rewrittenPropertiesDeveloper.role);*/


/*
==========================================
Exercício 7 - Rest Parameters
==========================================
*/

/*function sum(...numbers: number[]) {
    console.log(numbers);
}

function multiply(...numbers: number[]) {
    const newNumbers: number[] = [];

    for (const num of numbers) {
        const multipliedNumber = num * 2;
        newNumbers.push(multipliedNumber);
    }

    return newNumbers;
}

sum(10, 20, 30);
sum(5, 10, 30, 40, 50);

console.log(multiply(5, 10, 20, 40, 60));*/


/*
==========================================
Exercício 8 - Template Literals
==========================================
*/

/*const user = ['Felipe', 26, 'Developer'];

const [name, age, role] = user;

console.log(
    `My name is ${name}, I am ${age} years old, and my role in this enterprise is ${role}.`
);*/


/*======= Exercício 04 — Métodos de Arrays =======

Objetivos:
- Filtrar produtos sem vendas usando filter().
- Criar um relatório com faturamento usando map().
- Ordenar pelo faturamento usando sort().
- Desempatar pelo nome usando localeCompare().
- Somar o faturamento total usando reduce().
- Preservar o array original ao ordenar.*/

/*type Product = {
  name: string;
  category: string;
  price: number;
  sold: number;
};

const products: Product[] = [
  { name: "Teclado", category: "periférico", price: 250, sold: 8 },
  { name: "Mouse", category: "periférico", price: 300, sold: 15 },
  { name: "Monitor", category: "telas", price: 1200, sold: 0 },
  { name: "Headset", category: "áudio", price: 300, sold: 4 },
  { name: "Webcam", category: "vídeo", price: 300, sold: 4 },
];

const report = products
  .filter(product => product.sold !== 0)
  .map(product => ({
    name: product.name,
    category: product.category,
    price: product.price,
    sold: product.sold,
    revenue: product.price * product.sold,
  }));

const sortedRevenue = [...report].sort((a, b) => {
  const revenueDifference = b.revenue - a.revenue;

  if (revenueDifference !== 0) {
    return revenueDifference;
  }

  return a.name.localeCompare(b.name);
});

const totalRevenue = report.reduce(
  (total, product) => total + product.revenue,
  0
);

console.log(sortedRevenue);
console.log(totalRevenue);*/



/*
==========================================
Exercício 05 - Agrupamento de Dados com Record
==========================================

Objetivo:
Agrupar objetos por uma propriedade usando um objeto
como estrutura de armazenamento.

Conceitos treinados:
- Type Aliases com TypeScript
- Arrays de objetos tipados
- Record<string, Developer[]>
- for...of
- Acesso dinâmico a propriedades
- Operador lógico OR (||)
- Optional Chaining (?.)
- Array.push()
- Agrupamento e transformação de dados
*/

/*type Developer = {
    name: string;
    role: string;
};

const developers: Developer[] = [
    { name: 'Ana', role: 'Frontend' },
    { name: 'Carlos', role: 'Backend' },
    { name: 'Marcos', role: 'Frontend' },
    { name: 'Julia', role: 'Backend' },
    { name: 'Pedro', role: 'DevOps' }
];


/*function groupBy(array: Developer[]): Record<string, Developer[]> {
    const sortedDevelopers: Record<string, Developer[]> = {};

    for (const developer of array) {
        sortedDevelopers[developer.role] =
            sortedDevelopers[developer.role] || [];

        sortedDevelopers[developer.role]?.push(developer);
    }

    return sortedDevelopers;
}

console.log(groupBy(developers));*/

/*

==========================================
Exercício 06.01 - Function Declaration vs. Arrow Function
==========================================

Objetivos:
- Comparar Function Declarations e Arrow Functions.
- Compreender diferenças de sintaxe e retorno.
- Investigar hoisting e Temporal Dead Zone (TDZ).
- Compreender o comportamento de `this` em cada tipo de função.
*/

/*
==========================================
Exercício 06.02 - Closures e Estado Privado
==========================================

Objetivos:
- Compreender o funcionamento de closures.
- Preservar o estado de uma variável entre chamadas.
- Criar um contador com estado privado.
- Implementar incremento, decremento, consulta e reset.
- Compreender como cada chamada de createCounter() cria
  uma nova instância independente.
*/

/*
==========================================
Exercício 07.01 - Higher-Order Functions e Callbacks
==========================================

Objetivos:
- Compreender o conceito de Higher-Order Functions.
- Implementar funções que recebem outras funções como argumentos.
- Trabalhar com callbacks.
- Definir assinaturas de funções utilizando TypeScript.
- Passar referências de funções sem executá-las antecipadamente.
- Aplicar diferentes operações utilizando uma função genérica.
*/

/*
==========================================
Exercício 07.02 - call(), apply() e bind()
==========================================

Objetivos:
- Definir explicitamente o contexto de `this`.
- Compreender como call() e apply() executam uma função
  imediatamente com um contexto específico.
- Diferenciar o envio de argumentos individuais e em array.
- Compreender como bind() retorna uma nova função
  com o contexto vinculado.
- Comparar a execução imediata com a execução posterior.
*/

/*
==========================================
Exercício 07.03 - Perda de Contexto e Arrow Functions
==========================================

Objetivos:
- Investigar a perda de contexto ao extrair métodos de objetos.
- Compreender o comportamento de `this` em funções tradicionais.
- Entender o contexto léxico das Arrow Functions.
- Identificar quando utilizar bind() para preservar o contexto.
- Diferenciar o `this` dinâmico do `this` léxico.
*/


/*function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

const calculateTotalArrow = (price: number, quantity: number): number => {
    return quantity * price;
}

function sum(a: number, b: number): number {
    return a + b;
}

const sumArrow = (a: number, b: number): number => {
    return a + b;
}

const sumArrowSmallerVersion = (a: number, b: number): number => a + b;


function createCounter() {
    let counter = 0;

    function showCounter() {
        return counter;
    }
    
    
    function increment() {
        counter++
        return counter;
    }

    function reset() {
        counter = 0;
        return counter;
    }

    function decrement() {
        counter--
        return counter;
    }

    return {showCounter, increment, reset, decrement}
}

console.log(createCounter().showCounter())
console.log(createCounter().increment());
console.log(createCounter().increment());
console.log(createCounter().reset());*/



/*const sum = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;

function calculate(a: number, b: number, operation: (a: number, b: number) => number) {
    return operation(a, b);
}

console.log(calculate(10, 20, sum));
console.log(calculate(20, 5, subtract));*/

/*
 *==========================================*
 * Exercício 08.02 - Event Loop e Timers Aninhados
 *==========================================*
 *
 * Objetivo:
 * Compreender o agendamento e a ordem de execução de
 * callbacks do setTimeout, incluindo timers aninhados.
 *
 * O que aprendemos:
 * - O código síncrono executa antes dos callbacks dos timers.
 * - setTimeout define um atraso mínimo, não um horário
 *   garantido de execução.
 * - Um timer aninhado só é agendado quando seu callback
 *   externo é executado.
 * - Timers aninhados não executam imediatamente após serem
 *   agendados; eles aguardam sua vez no Event Loop.
 * - A ordem de execução depende do agendamento e das filas
 *   de tarefas do ambiente.
 *
 */

/*console.log("a");

setTimeout(() => {
    console.log("b");

    setTimeout(() => {
        console.log("c");
    }, 0);
}, 0);

setTimeout(() => {
    console.log("d");

    setTimeout(() => {
        console.log("e");
    }, 0);
}, 0);

console.log("f");*/


/*function* generateLoot() {
    console.log("Gerando a primeira recompensa");

    yield "Gold";

    console.log("Gerando a segunda recompensa");

    yield "Diamond"
}


const warrior = {
    name: "Felipe",
    attack() {
        return ("Attack now!")
    }
}

const inventory = ["Sword", "Shield", "Potion"];

for(const item of inventory) {
    console.log(item);
}


console.log(warrior.name)
console.log(warrior.attack());
console.log(warrior.toString());

console.log(Object.getPrototypeOf(warrior));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(warrior)));

const loot = generateLoot();

console.log(loot.next());
console.log(loot.next());


function* counter() {
    console.log("Início");

    yield 10;

    console.log("Meio");

    yield 20;

    console.log("Fim");

    return 30;
}

const iterator = counter();

console.log("A");
console.log(iterator.next());
console.log("B");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

/*
 *==========================================*
 * Exercício 10.01 - Busca Linear vs. Map
 *==========================================*
 *
 * Objetivo:
 * Comparar a busca linear com Array.find() e a busca
 * por chave utilizando Map.
 *
 * O que aprendemos:
 * - find() percorre o array até encontrar o elemento desejado.
 * - Map associa chaves a valores.
 * - Map.set() adiciona ou atualiza uma entrada.
 * - Map.get() busca um valor pela chave.
 * - A busca linear tem complexidade O(n) no pior caso.
 * - Map.get() possui complexidade média O(1).
 * - Map exige memória adicional e pode compensar em consultas
 *   repetidas quando sua construção é reutilizada.
 *
 */

/*type User = {
    id: number;
    name: string;
};

const users: User[] = [
    { id: 101, name: "Arthur" },
    { id: 102, name: "Luna" },
    { id: 103, name: "Leon" },
    { id: 104, name: "Maya" },
    { id: 105, name: "Ragnar" },
];

const userMap = new Map<number, User>();

function findUserById(id: number) {
    const user = users.find((user) => user.id === id);
    return user;
}

users.forEach((user) => {
    userMap.set(user.id, user);
});

const userFindUsingMap = userMap.get(103);

console.log(findUserById(101));
console.log(userFindUsingMap);*/

/*
 *==========================================*
 * Exercício 11.01 - Types, Interfaces e Union Types
 *==========================================*
 *
 * Objetivo:
 * Modelar objetos com type e interface e compreender
 * unions e interseções de tipos.
 *
 * O que aprendemos:
 * - type cria aliases para tipos e permite unions e interseções.
 * - interface define a estrutura de um objeto e permite
 *   declaration merging.
 * - Union (|) permite que um valor pertença a um entre
 *   vários tipos possíveis.
 * - Interseção (&) combina propriedades de diferentes tipos.
 * - O TypeScript verifica se os objetos respeitam suas estruturas.
 *
 */

/*type User = {
    id: number;
    name: string;
    email: string;
};

interface Admin {
    id: number;
    name: string;
    permissions: string[];
}

type Status = "active" | "inactive";
type AdminUser = User & { permissions: string[] };

const user: User = {
    id: 1,
    name: "Felipe",
    email: "felipe@email.com",
};

const admin: Admin = {
    id: 2,
    name: "Claudete do Megão",
    permissions: ["create user", "delete user"],
};*/



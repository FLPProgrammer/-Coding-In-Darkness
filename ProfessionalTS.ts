
/*
==========================================
Exercício 1 - Array Destructuring
==========================================
*/

const languages = ['typescript', 'javascript', 'python'];

const first = languages[0];
const second = languages[1];
const third = languages[2];

const [firstLanguage, secondLanguage, thirdLanguage] = languages;

console.log(first, firstLanguage);
console.log(second, secondLanguage);
console.log(third, thirdLanguage);


/*
==========================================
Exercício 2 - Array Destructuring com Posição Ignorada
==========================================
*/

const frameworks = ['React', 'Next.js', 'Angular', 'Vue'];

const [firstFrame, , thirdFrame] = frameworks;

console.log(firstFrame);
console.log(thirdFrame);


/*
==========================================
Exercício 3 - Object Destructuring
==========================================
*/

const userObject = {
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
console.log(roleObject);


/*
==========================================
Exercício 4 - Object Destructuring com Renomeação,
Valor Padrão e Aninhamento
==========================================
*/

const developer = {
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
console.log(backendSkill);


/*
==========================================
Exercício 5 - Spread Operator em Arrays
==========================================
*/

const frontend = ['HTML', 'CSS', 'JS'];
const backend = ['Node.js', 'Express'];

const allTechnologies = [...frontend, ...backend];
const updatedTechnologies = [...allTechnologies, 'Next.js'];

console.log(allTechnologies);
console.log(updatedTechnologies);


/*
==========================================
Exercício 6 - Spread Operator em Objetos
==========================================
*/

const developerObject = {
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
console.log(rewrittenPropertiesDeveloper.role);


/*
==========================================
Exercício 7 - Rest Parameters
==========================================
*/

function sum(...numbers: number[]) {
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

console.log(multiply(5, 10, 20, 40, 60));


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

type Developer = {
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

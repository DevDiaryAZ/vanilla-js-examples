// related lists

const todolistID_1 = 'were-4563';
const todolistID_2 = 'dfmg-3494';

const todolist = [
  {
    id: todolistID_1,
    title: 'What to learn',
    filter: 'all',
    tasks: [
      { id: 11, title: 'JS', isDone: false },
      { id: 12, title: 'CSS', isDone: false },
      { id: 13, title: 'REACT', isDone: false },
    ],
  },
  {
    id: todolistID_2,
    title: 'Shoping list',
    filter: 'all',
    tasks: [
      { id: 21, title: 'bread', isDone: false },
      { id: 22, title: 'milk', isDone: false },
      { id: 23, title: 'salt', isDone: false },
    ],
  },
];

const tasks = {
  [todolistID_1]: [
    { id: 11, title: 'JS', isDone: false },
    { id: 12, title: 'CSS', isDone: false },
    { id: 13, title: 'REACT', isDone: false },
  ],
  [todolistID_2]: [
    { id: 21, title: 'bread', isDone: false },
    { id: 22, title: 'milk', isDone: false },
    { id: 23, title: 'salt', isDone: false },
  ],
};

// console.log(tasks[1].find((el) => el.id === 11));

// console.log([...todolist, { id: 3, title: 'What to read', filter: 'all' }]);
// console.log({ ...tasks, 3: [] });

const secretKey = Math.floor(Math.random() * 100);
// console.log(secretKey);

// объект - это частный случай реализация концепции ассоциативного массива
const user = {
  name: 'Bob',
  'user age': 23,
  // [secretKey] - вычисляемое свойство объекта - переменная
  [secretKey]: 'password',
};

// console.log(user);

// https://learn.javascript.ru/object#kvadratnye-skobki

// reduce - [уменьшить, сократить, свертка]
// метод reduce сокращает
// Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.

const numbers = [10, 20, 30];

// acc - аккумулятор (накопитель)
// console.log(numbers.reduce((acc, el) => acc * el)) // => 10 => 30 => 60 - result

// own reduce method 
Array.prototype.reducePlus = function (func, startValue) {
  let acc = startValue ? startValue : this[0];

  for (let i = startValue ? 0 : 1; i < this.length; i++) {
    acc = func(acc, this[i]);
  }

  return acc;
};

// console.log(numbers.reducePlus((acc, el) => acc + el, 1))

const students = [
  { id: 1, name: 'Bob', age: 23, isMarred: true, scores: 89 },
  { id: 2, name: 'Nick', age: 20, isMarred: false, scores: 120 },
];

// const updateStudens = {
//   1: { name: 'Bob', age: 23, isMarred: true, scores: 89 },
//   2: { name: 'Nick', age: 20, isMarred: false, scores: 120 },
// };

const updateStudents = students.reduce((acc, el) => {
  acc[el.id] = { ...el };
  delete acc[el.id].id;
  return acc;
}, {});

// console.log(updateStudents);

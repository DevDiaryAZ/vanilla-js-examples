const names = ['bob', 'Alex', 'Nick', 'John', 101, 100, 'Юрий', 'юра'];

console.log(names.sort());

// 1. метод sort() работает мутабельно, исходный массив будет изменен
// 2. метод sort() возвращает ссылку на исходный масссив
// 3. метод sort() работает со строками без доп параметров
// 4.сортирует в порядке таблицы символов Unicode (unicode-table.com)

const numbers = [101, 100, 100.1, 0, 0.99, -99, 888, 99, 1000000000, 11];

// console.log(numbers.sort());

// const compareFunc = (a, b) => {
//   //по возрастанию
//   if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// };

const compareFunc = (a, b) => a - b;

// return (x < 0)  - перестановки не будет
// return (x > 0)  - перестановка произойдет

// console.log(numbers.sort(compareFunc));
// console.log(numbers.sort(compareFunc).reverse());

const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 95,
  },
  {
    name: 'Alex',
    age: 23,
    isMarried: true,
    scores: 89,
  },
  {
    name: 'Helge',
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 121,
  },
  {
    name: 'alex',
    age: 23,
    isMarried: true,
    scores: 89,
  },
];

console.log(students.sort((a, b) => a.scores - b.scores));

//localCompare() - строковый метод

// console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

// console.log(students.sort((a, b) => a.name > b.name ? 1 : -1))

// --------------------------------------------
// Алгоритм сортировки Пузырьком - bubble sort
// --------------------------------------------
// - самые большие числа всплывают к вперху массива (при классической сортировке)
// - медленный и самый простой метод сортировки

const nums = [11, 56, 47, 99, 12, 87, 34];

//в худшем сценарии количество операций будет O(N²), что крайне неэффективно

// самое большое число должно всплыть  - 99, 87, 56, 47 ...
count = 0;
for (let j = 0; j < nums.length - 1; j++) {
  let isSorted = true;
  for (let i = 0; i < nums.length - 1 - j; i++) {
    //по возрастанию
    // console.log(nums[i] + ' и ' + nums[i + 1]);
    if (nums[i] > nums[i + 1]) {
      isSorted = false;
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; // деструктуризация
      // let temp = nums[i];
      // nums[i] = nums[i + 1];
      // nums[i + 1] = temp;
      // console.log(nums);
      // console.log(isSorted);
    }
  }
  if (isSorted) break;
}

console.log(nums);

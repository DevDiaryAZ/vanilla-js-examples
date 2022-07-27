const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: 'Alex',
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
    scores: 100,
  },
];

// const names = ['Bob', 'Alex', 'Nick', 'John'];

const getNames = (array) => {
  const result = [];

  //отличаются только элементом преобразования масссива
  const getValueForResult = (el) => el.name;

  for (let i = 0; i < array.length; i++) {
    const newValue = getValueForResult(array[i]);
    result[i] = newValue;
  }
  return result;
};

//const scores = [85, 89, 120, 100]

const getScores = (array) => {
  const result = [];

  //отличаются только элементом преобразования масссива
  const getValueForResult = (el) => el.scores;

  for (let i = 0; i < array.length; i++) {
    const newValue = getValueForResult(array[i]);
    result[i] = newValue;
  }
  return result;
};

// console.log(getScores(students));

const addScores = (array) => {
  const result = [];

  //отличаются только элементом преобразования масссива
  const getValueForResult = (el) => ({ ...el, scores: el.scores + 10 });

  for (let i = 0; i < array.length; i++) {
    const newValue = getValueForResult(array[i]);
    result[i] = newValue;
  }
  return result;
};

// console.log(addScores(students));

// *** КАК РАБОТАЕТ МЕТОД map ПОД КАПОТОМ ***
//callback - метод преобразования элемента массива
const mapFunction = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i]);
  }
  return result;
};

// console.log(students.map(el => el.name));
// console.log(students.map(el => el.scores));
// console.log(students.map(el => ({...el, scores: el.scores * 10})))

// console.log(mapFunction(students, (el) => el.name));
// console.log(mapFunction(students, (el) => el.scores));
//  console.log(mapFunction(students, (el) => ({ ...el, scores: el.scores + 10 })));

// console.log(Array.prototype);

/// когда мы используем метод map? -
// 1. мы выполняем сплошное преобразование

// console.log(students.map(st=> {
//   return  `Student name ${st.name}: ${st.age}, ${st.scores}. ${st.isMarried ? 'Married' : 'Not Married'}.`
// }))

// CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных: создание (англ. create), чтение (read), модификация (update), удаление (delete).
// 
// Ник женился
// 2. нужно обновить элемент массива

console.log(
  students.map((st) =>
    st.name === 'Nick'
      ? {
          ...st,
          isMarried: true,
        }
      : st
  )
);

// console.log(
//   students.map((st) => {
//      if(st.name === 'Nick'){
//       return {...st,isMarried: true}
//     } else {
//       return st;
//     }
//   })
// );

// *** КАК РАБОТАЕТ МЕТОД filter ПОД КАПОТОМ ***
const filterFunction = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

// console.log(filterFunction(students,el => el.isMarried))
// console.log(filterFunction(students, (el) => !el.isMarried));
// console.log(filterFunction(students, (el) => el.age >= 21));

// *** КАК РАБОТАЕТ МЕТОД filter ПОД КАПОТОМ ***
const findFunction = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return array[i];
    }
  }
};

// console.log(findFunction(students,el => el.name === "Alex" || el.name === "Bob"))

// => {name: 'Bob', age: 22, isMarried: true, scores: 85}

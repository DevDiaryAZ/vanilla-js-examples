// console.log(typeof[]);
// console.log(typeof{});
// console.log(typeof(()=>{}));

// console.log(typeof null);
// console.log(typeof "");

// console.log(Array.isArray([]));

// const user = {
//   name: 'Bob',
//   age: 22,
//   isStudent: true,
//   friends: ['Joe', 'Alex', 'Vlad'],
//   aaaa: { ssss: "adas"}
// };

// const user2 = user;

// user2.name = "Alex"

// console.log(user);
// console.log(user2);

// Поверхностная копия объекта
// let user2 = { ...user };

// Глубокая копия объекта
// let user3 = { ...user, friends: [...user.friends, "Helga"], aaaa: {...user.aaaa, rrrr:"lll"} };
//  user3.friends.push("Anna");
// user2.friends.push("Anna");

// user2.name = user.name;
// user2.age = user.age;
// user2.isStudent = user.isStudent;

// console.log(user3);
// console.log(user2);

const students = [
  { name: 'Alex' },
  { name: 'Bob' },
  { name: 'Donald' },
  { name: 'Ann' },
];

// "Ann" -> "Joe"


const newStudents =  students.map((st) => (st.name === 'Ann' ? { ...st, name: 'Joe' } : st))
// console.log(students == newStudents)

const arr = [1,2,3,4];
const getArray = (a,b,c) => [a,b,c]

const [a, b, c] = getArray(3,7,5);
console.log(a, b, c)

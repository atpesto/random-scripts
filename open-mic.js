const students = [
  'Nikhil',
  'Navneet',
  'Monis',
  'Adi',
  'Sharmistha',
  'Rajul',
  'Saumya',
  'Amal',
  'Kundan'
];

const shuffledArray = students.map((student) => [Math.random(), student])
                              .sort()
                              .map((item) => item[1]);


shuffledArray.forEach((student, index) => console.log(`${++index}. ${student}`));
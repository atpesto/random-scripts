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

const items = [
  'Item-1',
  'Item-2',
  'Item-3',
  'Item-4',
  'Item-5',
  'Item-6',
  'Item-7',
  'Item-8',
  'Item-9'
];

Array.prototype.shuffled = function() {
  return this.map(item => [Math.random(), item])
             .sort()
             .map(itemArr => itemArr[1]);
}

const shuffledStudents = students.shuffled();
const shuffledItems = items.shuffled();

const mappedArray = shuffledStudents.map((student, index) => `${student} has to speak about ${shuffledItems[index]}`);

mappedArray.forEach(item => console.log(item));
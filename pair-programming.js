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

const pairs = shuffledArray.reduce((acc, student) => {
  const [lastItem, ...restOfItems] = acc.reverse();
  if(lastItem === undefined) {
    return [[student]];
  }
  if(lastItem.length === 2) {
    return [...acc, [student]];
  }
  return [...restOfItems, [...lastItem, student]];
}, [])


const readablePairs = pairs.map((pair) => pair.length === 2 ? `${pair[0]} - ${pair[1]}` : `${pair[0]} - No One`);

readablePairs.forEach(pair => console.log(pair));
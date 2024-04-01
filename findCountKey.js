function countKey(arrayString, key) {
  let count = 0;
  const elements = arrayString.split(',');
  for (const element of elements) {
    const num = parseElement(element);
    if (num === key) {
      count++;
    }
  }
  return count;
}

function parseElement(element) {
  if (element.includes('+')) {
    const parts = element.split('+');
    return parseInt(parts[0]) + parseInt(parts[1]);
  } else if (element.includes('-')) {
    const parts = element.split('-');
    return parseInt(parts[0]) - parseInt(parts[1]);
  } else {
    return parseInt(element);
  }
}

const arrayString = '4,8,13,5+3,12,12-4';
const key = 8;
const count = countKey(arrayString, key);
console.log(`Count of ${key} in the array: ${count}`);

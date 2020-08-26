export default function binarySearch(array, value, start, end, count) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  var count = count === undefined ? 0 : count;

  if (start > end)
    return -1;

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value)
    return `index: ${index} / count: ${count}`;
  else if (item < value)
    return binarySearch(array, value, index + 1, end, count++);
  else if (item > value)
    return binarySearch(array, value, start, index - 1, count++);

}
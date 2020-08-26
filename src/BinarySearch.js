export default function binarySearch(array, value, start, end, count) {

  if (start > end)
    throw new Error(`${value} not found`);

  const midIndex = Math.floor((start + end) / 2);
  const item = array[midIndex];

  count++;

  if (item === Number(value))
    return `index: ${midIndex} count: ${count}`;

  else if (item < value)
    return binarySearch(array, value, midIndex + 1, end, count);
  else if (item > value)
    return binarySearch(array, value, start, midIndex - 1, count);

}
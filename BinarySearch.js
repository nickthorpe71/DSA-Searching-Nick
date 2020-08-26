function binarySearch(array, value, start, end) {
  let startInner = start === undefined ? 0 : start;
  let endInner = end === undefined ? array.length : end;

  if (start > end)
    return -1;

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value)
    return index;
  else if (item < value)
    return binarySearch(array, value, index + 1, endInner);
  else if (item > value)
    return binarySearch(array, value, startInner, index - 1);

}
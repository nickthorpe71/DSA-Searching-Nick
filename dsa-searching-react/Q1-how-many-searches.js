import binarySearch from './BinarySearch.js';

function main() {
  // middle index is 5 and it's value is 12
  // 12 is > 8 so we disregard 12 and everything right of it
  // middle index of remaining is 2 with value 6
  // 6 is less than 8 so now we search index 2 - 4
  // this is where we find 8 is index 3

  binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8);
}

main();
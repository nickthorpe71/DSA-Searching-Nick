import React, { useState } from 'react';
import './App.css';
import binarySearch from './BinarySearch.js';
import BST from './DepthFirstSearch.js';


function App() {

  const [result, setResult] = useState('');
  const [searchInput, setSearchInput] = useState(0);
  const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78,
    50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
    15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69,
    64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38,
    28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83,
    6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,];


  const bstData = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

  let bst = new BST();

  for (let i = 0; i < bstData.length; i++)
    bst.insert(bstData[i]);

  function onClickLinear() {
    let count = 1;

    for (const i in data) {
      if ((data[i]).toString() === searchInput) {
        setResult(`it took ${count} steps to locate ${searchInput}`);
        return;
      }
      else {
        count++;
      }
    }
    throw new Error(`${searchInput} not found`);
  }

  function onClickBinary() {
    let arr = data.sort(function (a, b) { return a - b; });

    setResult(binarySearch(arr, searchInput, 0, arr.length - 1, 0));
  }

  function onClickInOrder() {
    bst.inorder(bst.root);
  }

  function onClickPreOrder() {
    bst.preorder(bst.root);
  }

  function onClickPostOrder() {
    bst.postorder(bst.root);
  }

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Search Comparison</h1>
      <label>Search For: </label>
      <div className="inputs">
        <input
          type="number"
          className="text-box"
          onChange={handleSearchInputChange}
        ></input>
      </div>
      <div>
        <button onClick={onClickLinear}>Linear</button>
        <button onClick={onClickBinary}>Binary</button>
      </div>
      <div>
        <button onClick={onClickInOrder}>InOrder</button>
        <button onClick={onClickPreOrder}>PreOrder</button>
        <button onClick={onClickPostOrder}>PostOrder</button>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default App;

function App() {
  const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
  ];
  const flattenArr = (array) =>
    array.reduce((arr, cur) => {
      if (Array.isArray(cur)) {
        return arr.concat(flattenArr(cur));
      } else {
        return arr.concat(cur);
      }
    });
  console.log(flattenArr(arr));
  return <div className=""></div>;
}

export default App;

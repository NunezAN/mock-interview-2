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
        // console.log(cur);
        return arr.concat(flattenArr(cur));
      } else {
        return arr.concat(cur);
      }
    }, []);
  // const flattenArr = (arr) =>
  //   arr.reduce(
  //     (acc, val) =>
  //       Array.isArray(val) ? acc.concat(flattenArr(val)) : acc.concat(val),
  //     []
  //   );
  console.log(flattenArr(arr));
  return <div className=""></div>;
}

export default App;

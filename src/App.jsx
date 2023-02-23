function App() {
  function substractTwo(a) {
    return a - 2;
  }
  function multiplyFour(a) {
    return a * 4;
  }
  const compose = (...functions) => {
    return (args) =>
      functions.reduceRight((arg, fn) => {
        return fn(arg);
      }, args);
  };
  const evaluate = compose(substractTwo, multiplyFour);
  console.log(evaluate(5)); // 23

  return <div className=""></div>;
}

export default App;

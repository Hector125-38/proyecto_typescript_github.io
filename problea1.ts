
(() => {
  
  const addTwoNumbers = (a: number, b: number) => {
    return a + b;
  };

  const testAddTwoNumbers = () => {
    console.log(addTwoNumbers(2, 4) === 6);  
    console.log(addTwoNumbers(10, 10) === 20);  
  };

  testAddTwoNumbers();
})();


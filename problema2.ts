
const addTwoNumbers = (_param: { first: number; second: number; }) => {
  return _param.first + _param.second;
};


(() => {
  console.log(addTwoNumbers({ first: 2, second: 4 }) === 6);  
  console.log(addTwoNumbers({ first: 10, second: 20 }) === 30);  
})();

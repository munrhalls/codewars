// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// 1 using recursion
function between(a, b) {
  let arr = [];
  const addNum = (a, b) => {
    arr.push(a);
    a++;
    if (a <= b) {
      addNum(a, b);
    }
  };
  addNum(a, b);

  return arr;
}

// 2 simple for loop
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}


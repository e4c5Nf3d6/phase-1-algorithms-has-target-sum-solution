function hasTargetSum(array, target) {
  const checkedNumbers = new Set();
  for (const number of array) {
    const difference = target - number;
    if (checkedNumbers.has(difference)) return true;
    checkedNumbers.add(number);
  }
  return false
}

/* 
  O(n)
*/

/* 
  Create a set to store all of the numbers we have checked
  iterate over the array of numbers
    for the current number, find the difference between the number and the target
    check if any of the numbers in the set are equal to the difference
      if yes, return true
    add the current number to the set
  return false
*/

/*
hasTargetSum checks if the sum of any two numbers in an array equals a target number.
It returns true if yes, false if no. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-10, 1, 5], -9));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 5], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

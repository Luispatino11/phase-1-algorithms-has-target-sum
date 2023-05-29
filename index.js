function hasTargetSum(arr, target) {
  // Create an empty set to store the visited numbers
  const visited = new Set();

  // Iterate through each number in the array
  for (let num of arr) {
    // Calculate the difference between the target and the current number
    const diff = target - num;

    // Check if the difference (required complement) has been visited before
    if (visited.has(diff)) {
      // If the complement exists in the set, we found a pair that adds up to the target
      return true;
    }

    // Add the current number to the set of visited numbers
    visited.add(num);
  }

  // If no pair is found, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;

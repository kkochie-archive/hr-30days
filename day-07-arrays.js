/*
Arrays --EASY

Task:
Given an array, A, of N integers, prints A's elements in reverse order as a single line of space-separated numbers.

Example:
A = [1, 2, 3, 4]
Print 4 3 2 1. Each integer is separated by one space.

Input Format:
The first line contains an integer, N (the size of the array). The second ine contains N space-separated integers that describe array A's elements.

Constraints:
• 1 <= N <= 1000
• 1 <= A[i] <= 10000 where A[i] is the ith integer in the array.

Output Format:
Print the elements of array A in reverse order as a single line of space-separated numbers.

Sample Input:
4
1 4 3 2

Sample Output:
2 3 4 1
*/

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = arr.reverse().join(" ");
  console.log(result);
}

// Using iteration not reverse
function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  let result = [];
  for (let i = 0; i < n; i++) {
    result.unshift(arr[i]);
  }
  console.log(result.join(" "));
}

/* Operators

Task
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

Example
meal_cost = 100
tip_percent = 15
tax_percent = 8
A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value 123 and return from the function.

Function Description
Complete the solve function in the editor below.

solve has the following parameters:

int meal_cost: the cost of food before tip and tax
int tip_percent: the tip percentage
int tax_percent: the tax percentage
Returns: The function returns nothing. Print the calculated value, rounded to the nearest integer.

Explanation
Given: meal_cost = 12, tip_percent = 20, tax_percent = 8
Calculations:
tip = 12 and 12/100 x 20 = 2.4
tax = 8 and 8/100 x 12 = 0.96
total_cost = meal_cost + tip + tax = 12 + 2.4 + 0.96 = 15.36
round(total_cost) = 15


* Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  let total_cost = 0
  let tip = (meal_cost/100) * tip_percent
  let tax = (meal_cost/100) * tax_percent

  total_cost = Math.round(meal_cost + tip + tax)
  console.log(total_cost)
}

console.log(solve(12.00, 20, 8))
console.log("hello")
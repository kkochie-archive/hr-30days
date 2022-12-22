/*
Dictionaries & Maps (Key-Value Pairs) -- EASY

Today we're learning about Key-Value pair mappings using a Map or Dictionary data structure.

Task:
Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format:
The first line contains an integer, n, denoting the number of entries in the phone book. 

Each of the n subsequent lines describes an entry in the form of 2 space-separated values on a single line. The first value is a friend's name, and the second value is an 8-digit phone number.

After the n lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.

Constraints:
• 1 <= n <= 10^5
• 1 <= queries <= 10^5

Output Format:
On a new line for each query, print Not found if the name has no corresponding entry in the phone book; otherwise, print the full name and phoneNumber in the format name=phoneNumber.

Sample Input:
  3
  sam 99912222
  tom 11122222
  harry 12299933
  sam
  edward
  harry

Sample Output:
  sam=99912222
  Not found
  harry=12299933

Explanation:
We add the following n = 3 (Key, Value) pairs to our map so it looks like this:
phoneBook = {(sam, 99912222), (tom, 11122222), (harry, 12299933)}

We then process each query and print key=value if the queried key is found in the map; otherwise, we print Not found.

Query 0: sam
Same is one of the keys in our dictionary, so we print
sam=99912222.

Query 1: edward
Edward is not one of the keys in the dictionary, so we print Not found.

Query 2: harry
Harry is one of the keys in the dictionary, so we print harry=12299933.
*/


function processData(input) {

  // Convert input to array. Remember split returns a new array.
  const inputArr = input.split('\n')
  const entries = parseInt(inputArr[0])
  const phonebook = []

  // Create phonebook entries
  for (let i = 0; i < entries; i++) {
    let entry = inputArr[0 + 1]
    entry = entry.split(' ')
    phonebook[entry[0]] = entry[1]
  }
  console.log(phonebook)

  // Match queries to phonebook entries
  for (let i = entries + 1; i < inputArr.length; i++ ) {
    if (phonebook[inputArr[i]]) {
      console.log(inputArr[i] + "=" + phonebook[inputArr[i]])
    } else {
      "Not found"
    } 
  }
} 

console.log(processData(
  3/n
  "sam 99912222"/n
  "tom 11122222"/n
  "harry 12299933"/n
  "sam"/n
  "edward"/n
  "harry"))


// for(let i = index+1; i < inputArr.length; i++) {
//   if(phonebook[inputArr[i]]) {
//       console.log(inputArr[i] + '=' + phonebook[inputArr[i]]);
//   } else {
//       console.log('Not found')
//   }
// }
// /////

// function processData(input) {
//   /// use forEach instead of map because map returns an array?
//     //Enter your code here
//     const array = input.split('\n')
		
//     const arrayContacts = array.slice(1, (+array[0] + 1))
//     const arrayNames = array.slice((+array[0] + 1))
   
//     const contacts = {}
		
//     arrayContacts.map(contact => {
//         const [name, phone] = contact.split(' ')
//         contacts[name] = phone
//     })
    
//     arrayNames.map(name => {
//         if (contacts[name]) {
//             console.log(`${name}=${contacts[name]}`)
//         } else {
//             console.log('Not found')
//         }
//     })
// } 
// //////

// function processData(input) {
//   let _input = input.split("\n");
//   let n = _input.shift();
//   let input2 = _input.join(" ").split(" ");
//   let phoneBook = {};
//   for (let i = 0; i < n * 2; i += 2) {
//     phoneBook[input2[i]] = input2[i + 1];
//   }
//   for (let j = n * 2; j < input2.length; ++j) {
//     if (phoneBook[input2[j]]) {
//       console.log(`${input2[j]}=${phoneBook[input2[j]]}`);
//     } else {
//       console.log("Not found");
//     }
//   }
// }

// ////

// function processData(input) {
//   const inputArr = input.split("\n");
//   const index = parseInt(inputArr[0]);
//   const phonebook = [];
  

//   for (let i = 0; i< index; i++){
//       let line = inputArr[i+1];
//       line = line.split(' ');
//       phonebook[line[0]] = line[1]
//   }
  
//   for(let i = index+1; i < inputArr.length; i++) {
//       if(phonebook[inputArr[i]]) {
//           console.log(inputArr[i] + '=' + phonebook[inputArr[i]]);
//       } else {
//           console.log('Not found')
//       }
//   }
// } 
// ////
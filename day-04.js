/* Class vs. Instance
Write a Person class with an instance variable, age , and a constructor that takes an integer, initialAge, as a parameter. The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as initialAge, the constructor should set age to 0 and print "Age is not valid, setting age to 0." In addition, you must write the following instance methods:
  1. yearPasses() should increase the age instance variable by 1.
  2. amIOld() should perform the following conditional actions:
    • if age < 13 print "You are young."
    • if age >= 13 and age < 18 print "You are a teenager."
    • otherwise print "You are old."

Input Format
Input is handled for you by the stub code in the editor.
The first line contains an integer, T (the number of test cases), and the T subsequent lines each contain an integer denoting the age of a Person instance.
*/

function Person(initialAge){
  let age
  if (initialAge < 0) {
      age = 0
      console.log("Age is not valid, setting age to 0.")
  } else {
      age = initialAge
  }
  
this.amIOld=function(){
 if (age < 13) {
     console.log("You are young.")
 } else if (age >= 13 && age < 18) {
     console.log("You are a teenager.")
 } else {
     console.log("You are old.")
 }

};
 this.yearPasses=function(){
      age += 1
 };
}


function main() {

  var T=parseInt(readLine());
  for(i=0;i<T;i++){
      var age=parseInt(readLine());
      var p=new Person(age);
      p.amIOld();
      for(j=0;j<3;j++){
          p.yearPasses();
          
      }
      p.amIOld();
      console.log("");   
      }
  }
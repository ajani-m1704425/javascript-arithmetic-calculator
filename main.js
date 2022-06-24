function Addition(){
    console.log("Addition of two number");
    var First_Number = Number(prompt("Enter the first number"));
    var Second_Number = Number(prompt("Enter the second number"));
    var Adder = First_Number + Second_Number;
    alert("The addition of the two numbers is: " + Adder);
}
    


function Subtraction(){
    console.log("Subtraction of two number");
    var First_Number = Number(prompt("Enter the first number:"));
    var Second_Number = Number(prompt("Enter the second number:"));
    var subtract = First_Number - Second_Number;
    alert("The subtraction of the two numbers is: " + subtract);
}
    


function Division(){
     console.log("Division of two number");
    var dividen = Number(prompt("Enter the dividen"));
    var divisor = Number(prompt("Enter the divisor"));
    var divide = dividen / divisor;
    alert("The division of the two numbers is: "+ divide);
}
   


function Multiplication(){
    console.log("Multiplication of two number\n");
    var First_Number = Number(prompt("Enter the first number:\n"));
    var Second_Number = Number(prompt("Enter the second number:\n"));
    var multiply = First_Number * Second_Number;
    alert("The multiplication of the two numbers is: "+ multiply);
}
    
 


let Select = prompt(
    "Press + to add, - to subtract, / to divide, * to multiply  :  ");

if (Select == "+"){
    Addition();
}
    
else if( Select == "-"){
    Subtraction();
}
    
else if (Select == "/"){
     Division();
}
   
else if (Select == "*"){
    Multiplication();
}
    
 

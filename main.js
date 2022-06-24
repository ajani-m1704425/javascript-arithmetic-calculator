function Addition(){
    console.log("Addition of two number");
    var First_Number = prompt("Enter the first number");
    var Second_Number = prompt("Enter the second number");
    var Adder = First_Number + Second_Number;
    console.log("The addition of the two numbers is: ", Adder);
}
    


function Subtraction(){
    console.log("Subtraction of two number");
    var First_Number = prompt("Enter the first number:");
    var Second_Number = prompt("Enter the second number:\n");
    var subtract = First_Number - Second_Number;
    console.log("The subtraction of the two numbers is: ", subtract);
}
    


function Division(){
     console.log("Division of two number");
    var dividen = prompt("Enter the dividen");
    var divisor = prompt("Enter the divisor");
    var divide = dividen / divisor;
    console.log("The division of the two numbers is: ", divide);
}
   


function Multiplication(){
    console.log("Multiplication of two number\n");
    var First_Number = prompt("Enter the first number:\n");
    var Second_Number = prompt("Enter the second number:\n");
    var multiply = First_Number * Second_Number;
    console.log("The multiplication of the two numbers is: ", multiply);
}
    


function Modulus(){
     console.log("Modulus of two number\n");
   var  First_Number = prompt("Enter the first number:\n");
    var Second_Number = prompt("Enter the second number:\n");
    var modulus = First_Number % Second_Number;
    console.log("The subtraction of the two numbers is: ", modulus);
}
   


let Select = prompt(
    "Press 1 to add, 2 to subtract, 3 to divide, 4 to multiply or 5 for modulus :  ");

if (Select == "1"){
    Addition();
}
    
else if( Select == "2"){
    Subtraction();
}
    
else if (Select == "3"){
     Division();
}
   
else if (Select == "4"){
    Multiplication();
}
    
else{
     Modulus();
}
   

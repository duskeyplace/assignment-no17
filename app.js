// chapter 4
// Q 1

let var1, var2, var3;


// Q2

// Legal variable names

let myVariable;
let $myVariable;
let _myVariable;
let my_variable;
let myVariable1;

// Illegal variable names


// let 1stVariable;
// let my-Variable;
// let my Variable;
// let my*Variable;
// let let;


// Q3

// Displaying in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs.</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JavaScript reserved keywords.</p>");



// chapter 5


//  
    // Step 1: Take a number in a variable
    let number = 3;

    // Step 2: Perform arithmetic operations
    let result = (number + 5) * 10 / 2;
    
    // Step 3: Display the result in the browser
    document.write("<h1>Arithmetic Operations Result:</h1>");
    document.write("<p>Number: " + number + "</p>");
    document.write("<p>Result: " + result + "</p>");
    
    
    
    // Q2
    
    
   



         // Take input from the user
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    // Perform addition
    var sum = num1 + num2;

    // Display the result in the browser
    document.write("<h2>Result:</h2>");
    document.write("<p>" + num1 + " + " + num2 + " = " + sum + "</p>");

    // Decrement the variable
    sum--;

    // Display the decremented value
    document.write("<h2>Value after decrement:</h2>");
    document.write("<p>" + sum + "</p>");

    // Calculate remainder after dividing the variable's value by 3
    var remainder = sum % 3;

    // Display the remainder
    document.write("<h2>The remainder is:</h2>");
    document.write("<p>" + remainder + "</p>");



    var ticketPrice = 600; // PKR



    var totalCost = ticketPrice * 5;



    document.write("<h2>Movie Ticket Cost</h2>");
    document.write("<p>total cost to buy 5 tickets a movie in    " + totalCost + " PKR</p>");



    // Q3

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;}

        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
          }


          var celsiusTemp = 30;


          var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);


          document.write("<h2>Temperature Converter</h2>");
    document.write("<p>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F</p>");



    var fahrenheitTemp2 = 86;


    var celsiusTemp2 = fahrenheitToCelsius(fahrenheitTemp2);


    document.write("<p>" + fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C</p>");




    // Q 


    console.log("a is?? \nb is ?? \n reslut is ??")




    // Q


    var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;

    // Taking marks for remaining 2 subjects from the user
    var subject3Marks = parseInt(prompt("Enter obtained marks for subject 3:"));
    var subject4Marks = parseInt(prompt("Enter obtained marks for subject 4:"));

    // Calculate total marks
    var totalMarks = result + subject3Marks + subject4Marks;

    // Calculate percentage
    var totalSubjects = 3; // Total number of subjects
    var maxMarksPerSubject = 100; // Assuming maximum marks per subject is 100
    var percentage = (totalMarks / (totalSubjects * maxMarksPerSubject)) * 100;

    // Display the result in a table format
    document.write("<h2>Student Result</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Subjects</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>English</td><td>" + result + "</td></tr>");
    document.write("<tr><td>Math</td><td>" + subject3Marks + "</td></tr>");
    document.write("<tr><td>Urdu</td><td>" + subject4Marks + "</td></tr>");
   
    document.write("</table>");


        









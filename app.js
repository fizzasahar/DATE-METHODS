// 1.
document.write("<h3>Current date and time:</h3>" + new Date());

// 2.
document.write("<h3>Current Month:</h3>" + moment().format("_____ MMMM ______"));

// 3.
document.write("<h3>Today is:</h3>" + moment().format("_____ ddd ______"))

// 4.
if (moment().format("ddd") === "Sun" || moment().format("ddd") === "Sat") {
    document.write("<h3>It's Fun day</h3>");
}

// 5.
if ("D" < 16) {
    document.write("<h3>First fifteen days of the month</h3>");
}
else {
    document.write("<h3>Last days of the month</h3>");
}

// 6.

document.write("<h3>Minutes and miliseconds since midnight, Jan. 1, 1970 :</h3>")
document.write("Current Date: " + "D " + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + moment().format("x") + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + (moment().format("x") / (1000 * 60)) + "<br>");

// 7.
if ("h" < 12) {
    document.write("<h3>Its AM</h3>");
}
else {
    document.write("<h3>-------------It's PM------------</h3>");
}

// 8.
var laterDate = moment("Dec 31, 2020");
document.write("<h3>The last day of the last month of 2020:</h3>")
document.write("<b>Last date:</b>");
document.write(laterDate)


// 9.
var remaining = moment() - moment([2015, 5, 18])
document.write("<h3>Days past since 1st Ramadan, 2015:</h3>")
document.write(Math.round(remaining / (1000 * 60 * 60 * 24)), "days has passed since 1st Ramadan, 2015</br>")

//  10.
document.write("<h3>Seconds had passed since beginning of 2015:</h3>")
var today = new Date();
var todayMilli = today.getTime();
var year2015 = new Date("Jan 01, 2015");
var year2015Milli = year2015.getTime();
var diffMilliSec = todayMilli - year2015Milli;
var secondsPast = diffMilliSec / (1000);
secondsPast = Math.floor(secondsPast);
document.write("On reference date: " + today + "<br>")
document.write(secondsPast + " seconds had passed since beginning of 2015");

// 11.
document.write("<h3>A hour ago:</h3>")
document.write("Current date: ")
document.write(moment())
document.write("<br>")
document.write("<b>1 hour ago ,</b> it was ");
document.write( moment().subtract(1 ,'hour') );

// 12.
document.write("<h3>100 years ago:</h3>")
document.write("Current date: ")
document.write(moment())
document.write("<br>")
document.write("<b>100 years back ,</b> it was ");
document.write( moment().subtract(100 ,'years') );

// 13.
document.write("<h3>Prompt Details:</h3>");
var age = +prompt("Enter your age");
var birthYear = moment().format("YYYY") - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br>");

// 14.
var customerName = "Fizza Sahar";
var noOfUnits = 410;
var unitCost = 16;
var netAmount = noOfUnits * unitCost;
var lateCharges = 150;
var grossAmount = netAmount + lateCharges;
document.write("<h3>K-Electric Bill </h3>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: ");
document.write(moment().format("MMMM"))
document.write("<br>")
document.write("No of units: " + noOfUnits + "<br>");
document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + lateCharges + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
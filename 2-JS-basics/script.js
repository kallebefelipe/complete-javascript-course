/****************************
 * Variables and data types
 */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

var job;
console.log(job)

job = 'Teacher';
console.log(job)

// Variable namiing rules
var _3years = 3;
var johnMark = 'Johnn and Mark';
var if = 23;
*/

/****************************
* Variables mutatuib and coercion
*/

// Type coercion
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age)

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a '+ age+ ' year old' + job + '. Is he married ' + isMarried )


// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a '+ age+ ' year old' + job + '. Is he married ' + isMarried )

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName)
*/

/****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older the John');
var x;
console.log(typeof x);

*/
/****************************
* Operator procedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge)

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y)

// More operators
x += 2;
console.log(x)
x += 10;
console.log(x)
x--;
console.log(x)
*/


/****************************
* Challenge 1
*/

/*
var massMark = 74;
var massJohn = 63;
var heigthMark = 1.78;
var heigthJohn = 1.93;

var bmiMark = massMark / (heigthMark * heigthMark);
var bmiJohn = massJohn / (heigthJohn * heigthJohn);

var markHigherJohn = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's ? " + markHigherJohn)
*/

/****************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefull marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefull marry soon :)');
}


var massMark = 74;
var massJohn = 63;
var heigthMark = 1.78;
var heigthJohn = 1.93;

var bmiMark = massMark / (heigthMark * heigthMark);
var bmiJohn = massJohn / (heigthJohn * heigthJohn);

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's")
} else {
    console.log("John's BMI is higher than Mark's")
}
*/


/****************************
* Boolean login
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

/****************************
* The Ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.') :  console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice'
}

// Switch statemente
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break
    default:
        console.log(firstName + ' does something else.');
}


age =  10;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break
    default:
        console.log(firstName + ' is a man.')
}
*/

/****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0 '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}
*/

/****************************
* Coding Challenge 2
*/

/*
var averageTeamJohn = (89 + 120 + 103) / 3;
var averageTeamMike = (116 + 94 + 123) / 3;

if (averageTeamJohn > averageTeamMike) {
    console.log('John team wins, score: ' + averageTeamJohn);
} else if (averageTeamMike > averageTeamJohn) {
    console.log('Mike team wins, score: ' + averageTeamMike);
} else {
    console.log('There is a draw!')
}
*/

/****************************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {
    var age =  calculateAge(year)
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/****************************
* Function Statements and Expressions
*/

// Function declaration
// functino whatDoYouDo(job, firstName) {}

// Function expression
/*
var whatDoYouDo =  function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teacher kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/****************************
* Code Challenge 3
*/

/*
function calcTip(bill) {
    switch (true) {
        case (bill < 50):
            return bill * 0.2;
        case (bill > 50 && bill < 200):
            return bill * 0.15;
        case (bill > 200):
            return bill * 0.1;
        default:
            return 0;
    }
}

var tipRestaurant1 = calcTip(123);
var tipRestaurant2 = calcTip(48);
var tipRestaurant3 = calcTip(268);

var tips = [tipRestaurant1, tipRestaurant2, tipRestaurant3]
var totals_bill = [123 + tips[0], 48 + tips[1], 268 + tips[2]]

console.log(tips)
console.log(totals_bill)
*/

/****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true

console.log(john)

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge(1990);
console.log(john)
*/

/****************************
* Coding Challenge 4
*/
/*
var mark = {
    name: 'Mark',
    mass: 74,
    height: 1.78,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

var john = {
    name: 'John',
    mass: 63,
    height: 1.93,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
mark.calcBmi();
john.calcBmi();
console.log(mark)

if (mark.bmi > john.bmi) {
    console.log(mark.name + ' BMI: ' + mark.bmi)
} else {
    console.log(john.name + ' BMI: ' + john.bmi)
}
*/

/****************************
* Coding Challenge 4
*/
/*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 0, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue']
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


var john = ['John', 'Smith', 1990, 'designer', false, 'blue']
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/****************************
* Coding Challenge 5
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.billsTip = [];
        this.tips = [];
        for (var i = 0; i < this.bills.length ; i++) {
            var percentage;
            var actualBill = this.bills[i];
            if (actualBill < 50) {
                percentage = .2;
            } else if (actualBill > 50 && actualBill < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }
            var tip = actualBill * percentage;
            this.tips[i] = tip;
            this.billsTip.push(actualBill + tip)
        }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.billsTip = [];
        this.tips = [];
        for (var i = 0; i < this.bills.length ; i++) {
            var percentage;
            var actualBill = this.bills[i];
            if (actualBill < 100) {
                percentage = .2;
            } else if (actualBill > 100 && actualBill < 300){
                percentage = .15;
            } else {
                percentage = .1;
            }
            var tip = actualBill * percentage;
            this.tips[i] = tip;
            this.billsTip.push(actualBill + tip)
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips)
mark.average = calcAverage(mark.tips)
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

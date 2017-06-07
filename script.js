//////////////////////////////////////////
// Function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

//fuction contructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge =
    function() {
        var currentYear = new Date().getFullYear();
        console.log(currentYear  - this.yearOfBirth);
    }
Person.prototype.lastName = 'Smith';

//creating onbject using function constructor:
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/




//////////////////////////////////////
//splice

/*var initialPoint;
var finalPoint;
var element = document.querySelector('.item-menu');
console.log(element);
element.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('tuch');
    initialPoint=event.changedTouches[0];
}, false);
element.addEventListener('click', function(event) {

});
element.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint=event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX){
                /!*СВАЙП ВЛЕВО*!/
                alert('left');
            }

            else{
                /!*СВАЙП ВПРАВО*!/
                console.log('swipe right');
                alert('right');
            }
        }
        else {
            if (finalPoint.pageY < initialPoint.pageY){
                /!*СВАЙП ВВЕРХ*!/
                console.log('swipe up');
                alert('up');
            }
            else{
                /!*СВАЙП ВНИЗ*!/
                console.log('swipe down');
                alert('down');
            }
        }
    }
}, false);*/

/*
var years = [1990, 1965, 1937, 2005, 1998];
arrayCalc(years);

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i=0, i<arr.length, i++) {
        arrRes.push(fn(arr[i]));
    }
    console.log(arrRes);
    return arrRes;
}*/


///////////////////////////////////////////////////
//Object.create

/*
var personPtoto = {
    calculateAge: function(){
        var currentYear = new Date().getFullYear();
        console.log(currentYear  - this.yearOfBirth);
    }
}

var john = Object.create(personPtoto);
john.name = 'John';
john.yearOfBirth = 1960;
john.job = 'teacher';

var jane = Object.create(personPtoto,
    {
        name: { value: 'Jane'},
        yearOfBith: { value: 1950},
        job : {value: 'designer'}
    })*/






/////////////////////////////////////////////
// Primitives vs objects

//Primitives
/*var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);*/





//////////////////////////////////////////
// Lecture: Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2008, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    var currentYear = new Date().getFullYear();
    return currentYear  - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >=18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);*/





///////////////////////////////////////////
//Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
console.log(teacherQuestion);

var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');
interviewQuestion('teacher')('MArk');*/











/////////////////////////////////////////////////
// Lecture: IIFE

/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);*/












//////////////////////////////////////////////////
// Closures

/*function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) +a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);



//function interviewQuestion with closures
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello, ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');*/








/////////////////////////////////////////////
// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good '+
                timeOfDay + ', Ladies and Gentelmen! I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old. Have a nice '+
                timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// call()
john.presentation.call(emily, 'friendly', 'afternoon'); // first variable: "this" variable, then parameters

//apply()
john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind()
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



//

var years = [1990, 1965, 1937, 2008, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    var currentYear = new Date().getFullYear();
    return currentYear  - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);*/









////////////////////////////////////////////////////////////
// CODING CHALLENGE

(function(){ // we use IIFE for call this function anywhere in other code without danger for same variables
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

// prototype

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        }
        else {
            console.log('Wrong answer. Try again :-)');
        }
    }

    var q1 = new Question('Is javascript is the coolest language in the world?',
        ['Yes', 'No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher',
        ['Jhon', 'Michel', 'Jonas'],
        2);
    var q3 = new Question('What does the best describe coding',
        ['Boring', 'Hard', 'Fun','Tediuos'],
        2);
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();


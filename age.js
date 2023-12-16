var age = 20;

if (age < 13) {
    document.write("Person is kid")
}
else if (age >= 13 && age < 18) {
    document.write("Person is young")
}
else if (age >= 18 && age < 30) {
    document.write("Person is Teen")
}
else if (age >= 30 && age < 50) {
    document.write("Person is Mid age")
}
else {
    document.write("Person is senior citizen")
}

function m1() {
    alert("hello");
}
function m2(){
    alert("hello");
}

function add() {
    var a = 20;
    var b = 10;
    var c = a + b;
    document.writeln("<br>a+b=", + c);
}
function sub() {
    var a = 20;
    var b = 10;
    var c = a - b;
    document.writeln("<br>a-b=", + c);
}
function mul() {
    var a = 20;
    var b = 10;
    var c = a * b;
    document.writeln("<br>a*b=", + c);
}
function div() {
    var a = 20;
    var b = 10;
    var c = a / b;
    document.writeln("<br>a/b=", + c);
}

add();
sub();
mul();
div();
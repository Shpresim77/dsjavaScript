document.getElementById('text').innerHTML = text;
var i;
var text="";
for (i = 0; i < 5; i++){
    text += "The number is "+i+"<br>";
}

console.log(text);
document.getElementById('text').innerHTML = text;

var secondText = document.getElementById('second');

var i;
var tek="";

for(var nr = 1; nr < 20; nr+=2 ){
    tek += "Numri tek eshte" +nr + "<br>" ;
}

secondText.innerHTML = tek;


var person = {firstName: "John",  lastName: "Doe", age: 25};

var third = document.getElementById("third");
var text3 = "";
var x;
for (x in person){
    text3+= x + ": " + person[x] + "<br>";
}

third.innerHTML = text3;


var names = ['Steve', 'Bill', 'Mark'];
var textN=""
var x;

for(x of names){
    
    textN+= " , " + x;
}

document.getElementById('name').innerHTML = textN;

var txt = "Javascript";
var textStr = ""
var x;

for(x of txt) {
    textStr+= x+ "<br>";

}

document.getElementById('textStr').innerHTML = textStr;

var i = 0;
do {
    i = i + 1;
    console.log(i);
}while(i < 5);


var j = 0;
while (j < 5){
    j = j + 1;
    console.log(j);
}

console.log("-------------------");


// Challenge 1

var Snames = ['Steve', 'Bill', 'Mark'];
var students = "";
for(var i=0;i<Snames.length;i++){
   students+=Snames[i]+'<br>';
}

function addNameF(){
    var w;
    for(w of Snames){
        students+=w+'<br>';
    }
    
    document.getElementById('nr1').innerHTML = students;
}

document.getElementById('nr1').innerHTML = students;

var addstudent = document.getElementById('addStudent');
var addName = document.getElementById('sname');

addstudent.onclick = function() {
    Snames.push(addName.value);
    addNameF(Snames);
    
}

function addNameF(Snames){
    var students ="";
    for (var i=0;i<Snames.length;i++){
        students+=Snames[i]+ '<br>';
    }
    document.getElementById('nr1').innerHTML = students;
}


// Regullar expresions
// Input values

var text1 = document.getElementById('text1');
var btn2 = document.getElementById('btn2');
var addedtext = document.getElementById('addedtext');

btn2.onclick = function(){
    addedtext.innerHTML = text1.value;
}
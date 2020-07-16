//Global scope
var globalName = "Joe";

function something() {
    globalName = "Piri";
    console.log(globalName);
}

something();

console.log(globalName);
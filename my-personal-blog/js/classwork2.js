var number_1 = 4;
var number_2 = 5;
var number_3 = 2;

//task1

function multiply (number_1, number_2, number_3) {

    return number_1 * number_2 * number_3;
}

//task2

var value = "This is a new string";

function reverseWordOrder(value) {
   
    var arr = value.split('');
    var revArr;
    for (i = arr.length-1; i >= 0; i++) {
        revArr.push(arr[i]);
    }
    var result_2 = revArr.join('');
  }
  

  //task3

  var personName = "Bob";
  var age = 44;

  function logUserData (personName, age) {
    console.log("$'personName' is $'age' years old");
  }
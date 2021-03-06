// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

//factorialize
function factorialize(num) {
  if(num == 0) return 1;
  return num*factorialize(num-1);
}

//if(palindrome)
function palindrome(str) {
  str = str.toLowerCase().replace(/([^a-z0-9])+/g,"");
  var revStr = reverseString(str);
  
  if(str == revStr) return true;
  return false;
}

//longest word
function findLongestWord(str) {
  str = str.split(" ");
  var l = 0;
  for(var i = 0; i < str.length; i++){
    if (str[i].length > l)
      l = str[i].length;
  }
  return l;
}

//Title Case a Sentence
function upCase(match) {
  return match.toUpperCase();
}
/*
Return the provided string with the first letter of each word capitalized. 
*/
function titleCase(str) {
  str = str.toLowerCase().replace(/\s[a-z]/g, upCase).replace(/^[a-z]/g, upCase);
  return str;
}

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var aux =[];
  for(var i = 0; i<arr.length; i++){
    var l = arr[i][0];
    for(var j = 1; j<arr.length; j++){
      if(arr[i][j] > l){
        l = arr[i][j];
      }
      aux[i] = l;
    }
  }
  return aux;
}


//confirm ending
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  if(target == str.slice(str.length - target.length, str.length)) return true;
  return false;
}


//repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  var aux = "";
  for(var i = 0; i<num ; i++){
    aux += str;
  }
  return aux;
}


//


















function Palindrome(str) { 
  var answer = null;
  var palind = str.split('').reverse().join('');
  if (palind === str) {
    answer = "true";
  }
  else {
   answer = "false"; 
  }
  

  return answer;
}
 

Palindrome(string());   
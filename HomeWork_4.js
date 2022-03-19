//1.	Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.
	
function even(start, end, step=1){
    let result = []
        if( end === 'undefined') {
        end = start;
        start = 0;
      }
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
      return result;
    };

    even(10, 100, 20)

    //2.	Given a string and a symbol. Find the number of occurrences of the symbol in the string.

    let str = 'another string';

    function findOccurances(str, symbol){
        return str.split(symbol).length - 1;
    }
    
    findOccurances(str, 't')

    //3.	Given a string. Check whether the string is palindrome or not.

    function findPalindrome(str) {
        let len = Math.floor(str.length / 2);
        for (let i = 0; i < len; i++)
          if (str[i] !== str[str.length - i - 1])
            return "no";
        return "yes";
      }
      console.log(findPalindrome("racecar"))

      //4.	Given an array of numbers. Find the maximum element in array.
      
      let arr = [1, 4, 43, -112]
      
      let max = arr[0]
       for(let i = 0; i < arr.length; i++) {
          if(arr[i]>max){
            max=arr[i]}
      }
      console.log(max)

      //5.	Given an array. Create the array which elements are products between two neighbours.

      function multipyArrEl(num){
        let element = num;
        let array = [];
        
         for (i=0; i < element.length-1; i++){
          array.push(element[i] * element[i+1]);
          
         }
         return array;
        
        }
        multipyArrEl([1, 1, 4, 32, 6])

      //6.	Given a string and symbols. Change first symbol by the second one in the string. 

      let str = 'The results are not recorded yet'

      let b = str.replaceAll("t", "w")

      console.log(b)

      //7.	Print the following number pattern.
      
      let n = 5;
      let string = "";
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          string += j;
        }
        string += "\n";
      }
      for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j <= n - i; j++) {
          string += j;
        }
        string += "\n";
      }
      console.log(string);

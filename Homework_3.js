//Task 1.	Given an array․ Compute the length of the array. (without using .length)

let a = [1, 12, 4,];

function lengthOfArray(a){
  let length = 0;
  while(a[length]!==undefined){
    length++;
  }
  return length;
}

console.log(lengthOfArray(a));

//Task 2. Given an array of numbers. Print the sum of the elements in array.

let myArray = [1, 12, 4,]
   let sum = 0;
    for(let i = 0; i < myArray.length; i++){
        sum += myArray[i];
    }

    //Task 3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)
    //input 0, 150; output 1, 2, 4, 8, 16, 32, 64, 128;
    
    for(let i = 1; i < 150; i*=2) {
      console.log(i);
   }

   //Task 4. Given a number as input, insert dashes (-) between each two even numbers. 
   
   let num = 25468;
   num = String(num);
   let result = [num[0]];

  for (let i = 1; i < num.length; i++) {
  if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
    result.push('-', num[i]);
  } else {
    result.push(num[i]);
  }
}
console.log(result);

//Task 5. Insert a n positive number. Print the n-th prime number.

function primeNumber(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  for (let i = 2; i * i <= n; ++ i) {
      if (n % i == 0) return false;
  }
  return true;
}
function findPrime(number) {
let prime = 2;
let i = 1;
while (i < number) {
  do {
      prime ++;
  } while (primeNumber(prime)===false);
  i ++;
}
return prime;
}
console.log(findPrime(14));


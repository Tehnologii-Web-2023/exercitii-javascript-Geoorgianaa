// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding documentation in the issue

export function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  // Add your code here!
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  // Add your code here!
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();
  return `${firstInitial}.${lastInitial}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (vatRate === undefined) throw new Error('vatRate is required');
  // Add your code here!
  let priceWithVat = originalPrice * (1 + vatRate / 100);
  priceWithVat = Math.round(priceWithVat * 100) / 100;
  return priceWithVat;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');
  // Add your code here!
  let salePrice = originalPrice * (1 - reduction / 100);
  salePrice = Math.round(salePrice * 100) / 100;
  return salePrice;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');
  // Add your code here!
  let middleIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return str.charAt(middleIndex);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  // Add your code here!
  let reversedWord = word.split('').reverse().join('');
  return reversedWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');
  // Add your code here!
  let reversedWords = words.map((word) => word.split('').reverse().join(''));
  return reversedWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  // Add your code here!
  const linuxUsers = users.filter((user) => user.type === 'Linux');
  return linuxUsers.length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  // Add your code here!
  const sum = scores.reduce((a, b) => a + b, 0);
  const mean = sum / scores.length;
  return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');
  // Add your code here!
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }
  if (n % 3 === 0) {
    return 'fizz';
  }
  if (n % 5 === 0) {
    return 'buzz';
  }
  return n;
}

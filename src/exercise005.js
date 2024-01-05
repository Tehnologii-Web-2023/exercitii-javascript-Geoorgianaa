export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');
  // Your code here!
  const index = nums.indexOf(n);
  if (index === -1 || index === nums.length - 1) {
    return null;
  }
  return nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error('str is required');
  // Your code here!
  let count = { 1: 0, 0: 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count[1]++;
    } else if (str[i] === '0') {
      count[0]++;
    }
  }
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error('n is required');
  // Your code here!
  return parseInt(n.toString().split('').reverse().join(''), 10);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error('arrs is required');
  // Your code here!
  let total = 0;
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      total += arrs[i][j];
    }
  }
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error('arr is required');
  // Your code here!
  if (arr.length < 2) return arr;
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');
  // Your code here!
  searchTerm = searchTerm.toLowerCase();
  for (let key in haystack) {
    if (typeof haystack[key] === 'string' && haystack[key].toLowerCase().includes(searchTerm)) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error('str is required');
  // Your code here!
  let frequencies = {};
  let words = str
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(' ');
  for (let word of words) {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }
  return frequencies;
};

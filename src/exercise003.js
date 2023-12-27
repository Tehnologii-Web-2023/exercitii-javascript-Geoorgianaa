export function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  // Your code here!
  return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');
  // Your code here!
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');
  // Your code here!
  return people.reduce((total, person) => total + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  // Your code here!
  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');
  // Your code here!
  const intersection = arr1.filter((value) => arr2.includes(value));
  const result = Array.from(new Set(intersection)).sort((a, b) => a - b);
  return result;
}

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount(str) {
  let arrayOfVowels = ["a", "e", "i", "o", "u"];
  let currentVowelCount = 0;
  
  const arrayOfLetters = str.toLowerCase().split("");
  
  for(let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfVowels.includes(arrayOfLetters[i])) {
      currentVowelCount += 1;
    }
  }
  return currentVowelCount;
}

console.log(vowelCount("How are you today beautiful?"));

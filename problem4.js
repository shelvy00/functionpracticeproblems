//Write a JavaScript function that checks if a single word is a palindrome.

function palindrome(str) {

	// get the total length of the words
	const len = str.length

	// Use for loop to divide the words into 2 half
	for (let i = 0; i < len / 2; i++) {

		// Validate the first and last characters are the same
		if (str[i] !== str[len - 1 - i]) {
			alert( "It is not a palindrome");
		}
	}
	alert("It is a palindrome");
}

console.log(palindrome("racecar"));
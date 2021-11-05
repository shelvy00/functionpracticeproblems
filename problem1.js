//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function sendText(name1) {
	let words = name1.split(" ");
	let longestWord = "";

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}
console.log(sendText("this is a string longestWord"))
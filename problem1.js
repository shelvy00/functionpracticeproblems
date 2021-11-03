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
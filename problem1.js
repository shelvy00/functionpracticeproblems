function sendText(name1) {
	let words = name1.split(" ");
	let longestWord = "";

	for (let i = 0; i < words.lenth; i++) {
		if (words[i].lenth > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}
console.log(sendText("this is a string longestWord"))
// Write a javaScript function that accepts two arguments, a string and a letter and the function will count the
// number of occurrences of the specified letter within the string.


function charCount(str,chr) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i].LowerCase() === chr.toLowerCase()) {
			count++
		}
	}
	console.log(count);
}
charCount("ocean", "a")
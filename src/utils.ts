export const toCamelCase = (text) => {
	return text.replace(/^./, function (str) {
		return str.toUpperCase();
	});
};

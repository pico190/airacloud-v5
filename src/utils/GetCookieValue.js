export function getCookieValue(name) {
	var result = "";

	document.cookie.split(name).forEach(element => {
		if(element.startsWith("=")) {
			result = element.replace("=", "").split(";")[0]
		}
	})

	return result;
}


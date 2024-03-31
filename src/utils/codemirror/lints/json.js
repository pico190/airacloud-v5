
/**
 * Function to lint JSON code and identify syntax errors
 * @param {string} fullcode - The full JSON code to be linted
 * @param {function} setErrors - Function to set syntax errors
 */
export default function jsonLinter(fullcode, setErrors) {
    var result = []
    try {
        JSON.parse(fullcode)
    } catch(err) {
        var line = err.message.split("line")[1].split("column")[0].trim()
        var index = err.message.split("column")[1].split("of")[0].trim()

        result.push({
            line: parseInt(line),
            index: parseInt(index),
            code: fullcode.split("\n")[line-1],
            message: err.message,
            type: 'error',
            codelines: fullcode.split("\n")
        })
    }

    setErrors(result);

}

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
        var line = err.split("line")[1].split("column")[0].trim()
        var index = err.split("column")[1].split("of")[0].trim()

        result.push({
            line: line,
            index: index,
            code: fullcode.split("\n")[line-1],
            message: err,
            type: 'error',
            codelines: fullcode.split("\n")
        })
    }

    setErrors(result);

}

/**
 * Function to lint JSON code and identify syntax errors
 * @param {string} fullcode - The full JSON code to be linted
 * @param {function} setErrors - Function to set syntax errors
 */
export default function jsonLinter(fullcode, setErrors) {

    try {
        JSON.parse(fullcode)
    } catch(err) {
        console.log(err);
    }

}
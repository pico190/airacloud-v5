/*
Swiftly Open Source
- You can use this as you want
*/

import $ from 'jquery'; // Importing jQuery library
import { encode } from 'js-base64'; // Importing encode function from js-base64 library
import { console_info, console_group } from '../../Console';

/**
 * Function to find the nearest string to a target string in a given text
 * @param {string} targetString - The text/line to search within
 * @param {number} lineNumber - If there is no line found returns lineNumber
 * @param {string} text - The full code to search in
 * @returns {integer} - Number
 */
function findNearestString(targetString, lineNumber, text) {
    var lines = text.split("\n");
    var retrn = lineNumber
    lines.forEach((line, index) => {
        if(line.includes(targetString)) {
            console.log(line, index, index - 1);
            retrn = index - 1;
        }
    })
    return retrn;
}
  

/**
 * Function to get the index of the second occurrence of stringA within stringB
 * @param {string} stringA - The string to find
 * @param {string} stringB - The string to search within
 * @returns {number} - Index of the second occurrence of stringA within stringB, or -1 if not found
 */
function getStringIndex(stringA, stringB) {
    let count = 0;
    let index = -1;
    let column = -1;

    while ((index = stringB.indexOf(stringA, index + 1)) !== -1) {
        count++;
        if (count > 1) {
            return 0; // If more than one occurrence found, return 0
        }
        column = index;
    }

    return column;
}

let currentRequests = []; // Array to store current AJAX requests

/**
 * Function to lint PHP code and identify syntax errors
 * @param {string} fullcode - The full PHP code to be linted
 * @param {function} setErrors - Function to set syntax errors
 */
export default function phpLinter(fullcode, setErrors) {
    // Abort ongoing requests before making new ones
    currentRequests.forEach(request => request.abort());
    currentRequests = [];

    var errorArray = []; // Array to store syntax errors

    var phpdetections = [];

    // Split the PHP code by "<?php" and "?>" tags
    fullcode.split("<?php").forEach(phpclose => {
        var phpcode = phpclose.split("?>");
        phpdetections.push(phpcode[0]);
    });

    // Iterate over detected PHP code blocks
    phpdetections.forEach(code => {
        const encodedCode = encode(code.trim());
        if (encodedCode.length > 0) {
            // Send POST request to PHP code checker API
            const request = $.post("https://phpcodechecker.com/api/?base64", { code: encodedCode }, (data) => {
                // try {
                    const response = JSON.parse(data);
                    if (response.hasOwnProperty('syntax')) {
                        console_info("PHP Linter > Errors detected");
                        var rsponsesyntax = response.syntax
                        var line = rsponsesyntax.message.split("line ")
                        var lineAround = parseInt(line[line.length - 1])

                        // Find the nearest line in the original code
                        console_info("PHP Linter > Finding Line");
                        const targetString = rsponsesyntax.code;
                        const targetLine = lineAround;
                        console_group("PHP Linter > Finding Line [Context]");
                        console.log("lineString:", targetString);
                        console.log("lineNumber:", targetLine);
                        console.log("fullCode:", fullcode);
                        console.groupEnd();
                        var linefound = findNearestString(targetString, targetLine, fullcode);
                        rsponsesyntax.line = linefound+2;
                        rsponsesyntax.codelines = fullcode.split("\n");

                        // Get the index of the second occurrence of the error character within the code
                        console_info("PHP Linter > Finding Index");
                        var indexchar = rsponsesyntax.message.split("'")[1].split("'")[0];
                        rsponsesyntax.index = getStringIndex(indexchar, rsponsesyntax.codelines[rsponsesyntax.line - 1]);

                        // Format and push the error message
                        console_info("PHP Linter > Parsing Error");
                        var messageparse = rsponsesyntax.message.replace("Parse error: ", "").split(" on line")[0].replace(" in your code", "")
                        rsponsesyntax.message = messageparse.charAt(0).toUpperCase() + messageparse.slice(1);
                        errorArray.push(rsponsesyntax);
                        console_group("PHP Linter > Result");
                        console.log(rsponsesyntax);
                        console.groupEnd();
                    }
                // } catch (err) {
                //     return false;
                // }
                currentRequests.splice(currentRequests.indexOf(request), 1);

                // Set errors when all requests are completed
                if (currentRequests.length === 0) {
                    setErrors(errorArray);
                }
            });
            currentRequests.push(request);
        }
    });
}
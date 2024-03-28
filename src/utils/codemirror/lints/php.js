/*
Swiftly Open Source
- You can use this as you want
*/

import $ from 'jquery'; // Importing jQuery library
import { encode } from 'js-base64'; // Importing encode function from js-base64 library

/**
 * Function to find the nearest string to a target string in a given text
 * @param {string} text - The text to search within
 * @param {string} targetString - The target string to find
 * @param {number} targetLine - The line number of the target string
 * @returns {object|null} - Object containing index, line, and text of the nearest string, or null if not found
 */
function findNearestString(text, targetString, targetLine) {
    const lines = text.split('\n');
    let nearestIndex = -1;
    let minDistance = Infinity;

    lines.forEach((line, index) => {
        const distance = Math.abs(index + 1 - targetLine);
        const indexInLine = line.indexOf(targetString);

        if (indexInLine !== -1 && distance < minDistance) {
            nearestIndex = indexInLine;
            minDistance = distance;
        }
    });

    if (nearestIndex !== -1) {
        return {
            index: nearestIndex,
            line: targetLine,
            text: lines[targetLine - 1]
        };
    } else {
        return null;
    }
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

    const errorArray = []; // Array to store syntax errors

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
                try {
                    const response = JSON.parse(data);
                    if (response.hasOwnProperty('syntax')) {
                        var rsponsesyntax = response.syntax
                        var line = rsponsesyntax.message.split("line ")
                        var lineAround = parseInt(line[line.length - 1])

                        // Find the nearest line in the original code
                        const targetString = rsponsesyntax.code;
                        const targetLine = lineAround;
                        const linefound = findNearestString(fullcode, targetString, targetLine);
                        rsponsesyntax.line = linefound.line + 2;
                        rsponsesyntax.codelines = fullcode.split("\n");

                        // Get the index of the second occurrence of the error character within the code
                        var indexchar = rsponsesyntax.message.split("'")[1].split("'")[0];
                        rsponsesyntax.index = getStringIndex(indexchar, rsponsesyntax.code);

                        // Format and push the error message
                        var messageparse = rsponsesyntax.message.replace("Parse error: ", "").split(" on line")[0].replace(" in your code", "")
                        rsponsesyntax.message = messageparse.charAt(0).toUpperCase() + messageparse.slice(1);
                        errorArray.push(rsponsesyntax);
                    }
                } catch (err) {
                    return false;
                }
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

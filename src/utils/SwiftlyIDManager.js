import $ from 'jquery';
import { useState } from 'react';
// import { getCookieValue } from './GetCookieValue';

export function StartSwiftlyIDClient() {

    var [response, setResponse] = useState(undefined);

    const url = window.location.href;
    const swiftlyIDError = "Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6";

    // urls
    const getToken = "https://xploit.men/swiftly/api/swiftlyid/gettoken?revokeCode="
    const getName = "https://xploit.men/swiftly/api/swiftlyid/getinfo/getname?token="

    // Swiftly ID Not Started
    if(url.includes("?revokeCode")) {

            // Revoke Code
            const revokeCode = url.split("?revokeCode=")[1];
            $.get(getToken + revokeCode, (data) => {
                
                if(data === swiftlyIDError) {
                    window.location.href = "https://xploit.men/aira/error.php?error=e0x01"
                    return true;
                }
            
                var token = data;  
                $.get(getName + token, (data) => {          
                    window.history.pushState("", "", "/")
                })                                                             

                return true;                                                                                                 })
            

    } else {

            // Redirect
            window.location.href = "https://xploit.men/swiftly/login/aira"
    }




}
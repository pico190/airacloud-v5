import $ from 'jquery';
// import { getCookieValue } from './GetCookieValue';

export function StartSwiftlyIDClient() {

    const url = window.location.href;

    if(!url.includes("/!/")) {

        // Swiftly ID Not Started
        if(url.includes("?revokeCode")) {

            // Revoke Code
            const revokeCode = url.split("?revokeCode=")[1];
            const token = undefined
            $.get(`https://xploit.men/swiftly/api/swiftlyid/gettoken?revokeCode=${revokeCode}`, (data) => {token = data;
            
            alert(revokeCode + ", " + token)
            })
            

        } else {

            // Redirect
            window.location.href = "https://xploit.men/swiftly/login/aira"
        }


    } else {

        // Swiftly ID Started


    }


}
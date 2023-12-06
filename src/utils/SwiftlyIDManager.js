import $ from 'jquery';
import { getCookieValue } from './GetCookieValue';

export function StartSwiftlyIDClient() {

    function loadByToken(token) {

        var response = {};
    
        $.get("https://xploit.men/swiftly/api/swiftlyid/getinfo/getname.php?token="+token, (data) => {
            if(data==="Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6") {
                window.location.replace("https://xploit.men/aira/swiftlyid-error.php");
            } else {
                username = data;
                response = {
                    'token': token,
                    'username': username
                }
            }
        });

        return response;
    }

    if(!document.cookie.includes("token__DO_NOT_SEND") && !window.location.href.includes("?revokeCode=")) {
        window.location.replace("https://xploit.men/swiftly/login/aira?redirect_uri="+window.location.href)
        return false;
    } else if (window.location.href.includes("?revokeCode=")) {
        var revokeCode = window.location.href.split("?revokeCode=")[1];
        var username = "";
        var token = "";
        var response__ = "";
        $.get("https://xploit.men/swiftly/api/swiftlyid/gettoken?revokeCode="+revokeCode, (data) => {
            if(data==="Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6") {
                window.location.replace("https://xploit.men/aira/swiftlyid-error.php");
            } else {
                token = data;
                response__ = loadByToken(token);
            }
        });
        window.location.replace("?/");
        return response__;
    } else if (document.cookie.includes("token__DO_NOT_SEND")) {
        var cookieToken = getCookieValue("token__DO_NOT_SEND")
    }
    
}
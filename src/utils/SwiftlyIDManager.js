import $ from 'jquery';

export function StartSwiftlyIDClient() {

    function loadByToken(token) {
        return new Promise((resolve, reject) => {
            $.get("https://xploit.men/swiftly/api/swiftlyid/getinfo/getname.php?token=" + token, (data) => {
                if (data === "Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6") {
                    reject("Error: Invalid token");
                } else {
                    const username = data;
                    const response = {
                        'token': token,
                        'username': username
                    };
                    resolve(response);
                }
            });
        });
    }

    function loadByRevokeCode(revokeCode) {
        return new Promise((resolve, reject) => {
            document.cookie = "revokeCode=" + revokeCode + "; SameSite=Strict; Secure;";
            let token = "";
            $.get("https://xploit.men/swiftly/api/swiftlyid/gettoken?revokeCode=" + revokeCode, (data) => {
                if (data === "Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6") {
                    reject("Error: Invalid revoke code");
                } else {
                    token = data;
                    loadByToken(token)
                        .then((response) => {
                            resolve(response);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                }
            });
        });
    }

    if (!window.location.href.includes("?revokeCode=") && !window.location.href.includes("!")) {
        window.location.replace("https://xploit.men/swiftly/login/aira?redirect_uri=" + window.location.href);
        return false;
    } else {
        let response__ = "";
        if (window.location.href.includes("?revokeCode=")) {
            const revokeCode = window.location.href.split("?revokeCode=")[1];
            loadByRevokeCode(revokeCode)
                .then((response) => {
                    response__ = response;
                    if (!window.location.href.includes("!")) {
                        window.location.replace("/!/");
                    }
                })
                .catch((error) => {
                    window.location.replace("https://xploit.men/aira/swiftlyid-error.php");
                });
        } else {
            const revokeCode = getCookieValue("revokeCode");
            if (revokeCode !== "" && revokeCode !== undefined && revokeCode !== null) {
                window.location.replace("https://xploit.men/swiftly/login/aira?redirect_uri=" + window.location.href);
            } else {
                loadByRevokeCode(revokeCode)
                    .then((response) => {
                        response__ = response;
                        if (!window.location.href.includes("!")) {
                            window.location.replace("/!/");
                        }
                    })
                    .catch((error) => {
                        window.location.replace("https://xploit.men/aira/swiftlyid-error.php");
                    });
            }
        }
        return response__;
    }
}

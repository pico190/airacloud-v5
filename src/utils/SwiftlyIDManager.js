import $ from 'jquery';
// import { getCookieValue } from './GetCookieValue';

export function StartSwiftlyIDClient() {
    
    var token = "mUssDx]ot[jwAUMq6Pd)J6nS(z0TSm}/543]h=8s!(CxEt/jN]Lm}ABEH!K}5lVnKsT0)_.o"
    $.post("https://xploit.men/aira/api/v1/projects/getuserprojects.php", {token: token}, (data) => {
        projects = data;
        return {
            token: token,
            name: "Pico",
            username: "pico_190",
            email: "picoprograma190@gmail.com",
            discriminator: "190",
            avatar: "https://xploit.men/swiftly/pico.png",
            projects: projects
        }
    })

    //     {
    //         name: "AiraCloud en Astro",
    //         type: "astro",
    //         id: "taQ578DPRZ1pOn3svzGSVjE5rASJ",
    //         pinned: true,
    //         recent: true,
    //         position: 0
    //     },
    //     {
    //         name: "Nature Anotaciones",
    //         type: "react",
    //         id: "kcFv9FcAfe5M0Z0yRV2NTpshPzCt",
    //         pinned: false,
    //         recent: false,
    //         position: 1
    //     },
    //     {
    //         name: "Nature Porn",
    //         type: "react",
    //         id: "Dksj7yZ9CRPMihpU65mfTVRsKD35",
    //         pinned: false,
    //         recent: true,
    //         position: 2
    //     },
    //     {
    //         name: "LipseloCraft 3",
    //         type: "java",
    //         id: "n23QYW9f7IqPv6zXFtDoOp4X6tXj",
    //         pinned: false,
    //         recent: false,
    //         position: 3
    //     },
    //     {
    //         name: "Swoftolofto",
    //         type: "php",
    //         id: "6TfiCF3C48s85wGFJQ4Z9Rmj7LM1",
    //         pinned: true,
    //         recent: false,
    //         position: 4
    //     },
    //     {
    //         name: "Tumbar web a Stuxiom",
    //         type: "python",
    //         id: "m8Rg0MYhfY4cd4aGtU5xGjedEYCC",
    //         pinned: true,
    //         recent: false,
    //         position: 5
    //     }
    // ]

    // var req = new XMLHttpRequest();
    // req.open('GET', document.location, true);
    // req.send(null);
    // req.onload = function() {
    // };

    // if (req.getResponseHeader('token')===null) {
    //     window.location.href = 'https://xploit.men/swiftly/login/aira';
    // } else {
    //     const url = window.location.href;
    //     const swiftlyIDError = "Error 12xGcidT9pwcVnsx3MXWVw$3R&j7W6";
    
    //     // urls
    //     const getName = "https://xploit.men/swiftly/api/swiftlyid/getinfo/getname?token=";
    
    //     alert(req.getResponseHeader('token'));
    // }

      
    // // Swiftly ID Not Started
    // if(url.includes("?revokeCode")) {

    //         // Revoke Code
    //         const revokeCode = url.split("?revokeCode=")[1];
    //         $.get(getToken + revokeCode, (data) => {
                
    //             if(data === swiftlyIDError) {
    //                 window.location.href = "https://xploit.men/aira/error.php?error=e0x01"
    //                 return true;
    //             }
            
    //             var responsetoken = data;  
    //             $.get(getName + responsetoken, (data) => {          
                    
    //                 if(data === swiftlyIDError) {
    //                     window.location.href = "https://xploit.men/aira/error.php?error=e0x01"
    //                     return true;
    //                 }
                    
    //                 // window.history.pushState("", "", "https://airacloud-v5.vercel.app/home/")

    //                 var lastresponse = {
    //                     "usertoken": responsetoken,
    //                     "username": data
    //                 }

    //                 alert(lastresponse);

    //                 // lastresponse

    //             })                                                             

    //             return true;                                                                                                 })
            

    // } else {

    //         // Redirect
    //         window.location.href = "https://xploit.men/swiftly/login/aira"
    // }


    // return "sex";




}
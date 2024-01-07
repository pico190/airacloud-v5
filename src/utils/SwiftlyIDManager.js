import $ from 'jquery';
// import { getCookieValue } from './GetCookieValue';

export async function StartSwiftlyIDClient() {
    
    var token = "mUssDx]ot[jwAUMq6Pd)J6nS(z0TSm}/543]h=8s!(CxEt/jN]Lm}ABEH!K}5lVnKsT0)_.o"
    $.post("https://xploit.men/aira/api/v1/projects/getuserprojects.php", {token: token}, (data) => {
        var projects = data;
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



}
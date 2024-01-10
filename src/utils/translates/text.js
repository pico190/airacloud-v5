import { gcookie } from "../CookieParser";

export function Text({ id }) {
    var language = navigator.language.slice(0, 2);
    let currentDate = new Date();
    let expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

    if (!document.cookie.includes("DATA__LANG")) {
    
        let storedData = localStorage.getItem('langs');
    
        if (storedData) {
            processData(JSON.parse(storedData));
        } else {
            fetch('https://airacloud-v5.vercel.app/translates/langs.json')
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('langs', JSON.stringify(data));
                    processData(data, language);
                })
                .catch(error => {
                    console.error("Error to load text. Please check your internet connection");
                });
        }
    
        function processData(data, language) {
            let languages = Object.keys(data);
            if (!languages.includes(language)) {
                language = "en";
            }
    
            document.cookie = "DATA__LANG=" + language + "; SameSite=Strict; Secure; path=/; expires=" + expiryDate.toUTCString() + ";"
        }
    }

    ////////////////////////////////////////////////

    var lang = gcookie("DATA__LANG");

    
    let storedData = localStorage.getItem('translates');
    
    if (storedData) {
        var data = JSON.parse(storedData);
        var span = document.getElementById(id);
        span.innerText = data[id]
    } else {
        
        fetch('https://airacloud-v5.vercel.app/translates/'+lang+'.json')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                localStorage.setItem('translates', JSON.stringify(data));
                var span = document.getElementById(id);
                span.innerText = data[id]
            }, 900)
        })
    }

}
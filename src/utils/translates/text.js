import { gcookie } from "../CookieParser";

export function Text({ id, var1="" }) {
    const language = navigator.language.slice(0, 2);
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

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
                .catch(error => console.error("Error loading text. Check your internet connection"));
        }

        function processData(data, language) {
            const languages = Object.keys(data);
            if (!languages.includes(language)) {
                language = "en";
            }

            document.cookie = `DATA__LANG=${language}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
        }
    }

    const lang = gcookie("DATA__LANG");
    const storedData = localStorage.getItem('translates');

    if (storedData) {
        const data = JSON.parse(storedData);
        return data[id].replace(/●/, var1) || "Translate Error";
    } else {
        fetch(`https://airacloud-v5.vercel.app/translates/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    localStorage.setItem('translates', JSON.stringify(data));
                    
                    var resulttr = data[id].replace(/●/, var1);
                    return resulttr || "Translate Error";
                }, 900);
            });
    }
}
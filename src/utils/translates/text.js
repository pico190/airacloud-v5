import { gcookie } from "../CookieParser";

export function Text({ id, var1="", var1r="●" }) {
    const language = navigator.language.slice(0, 2);
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

    let langCookie = gcookie("DATA__LANG");
    let storedLangs = localStorage.getItem('langs');

    if (!langCookie) {
        if (!storedLangs) {
            fetch('https://airacloud-v5.vercel.app/translates/langs.json')
                .then(response => response.json())
                .then(data => {
                    const languages = Object.keys(data);
                    const selectedLang = languages.includes(language) ? language : "en";
                    localStorage.setItem('langs', JSON.stringify(data));
                    langCookie = selectedLang;
                    document.cookie = `DATA__LANG=${langCookie}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
                    fetchAndSaveTranslates(selectedLang);
                })
                .catch(error => console.error("Error loading text. Check your internet connection"));
        } else {
            const languages = JSON.parse(storedLangs);
            langCookie = languages.includes(language) ? language : "en";
            document.cookie = `DATA__LANG=${langCookie}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
            fetchAndSaveTranslates(langCookie);
        }
    } else {
        fetchAndSaveTranslates(langCookie);
    }

    function fetchAndSaveTranslates(selectedLang) {
        fetch(`https://airacloud-v5.vercel.app/translates/${selectedLang}.json`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('translates', JSON.stringify(data));
                const resulttr = data[id].replace(var1r, var1);
                return resulttr || "Translate Error";
            })
            .catch(error => console.error("Error loading text. Check your internet connection"));
    }

    const storedData = localStorage.getItem('translates');

    if (storedData) {
        const data = JSON.parse(storedData);
        return data[id].replace(var1r, var1) || "Translate Error";
    }

    return "Translate Error";
}

import { gcookie } from "../CookieParser";

export function Text({ id, var1="" }) {
    const language = navigator.language.slice(0, 2);
    const currentDate = new Date();
    const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

    let langCookie = gcookie("DATA__LANG");
    let storedLang = localStorage.getItem('selectedLang');

    if (!langCookie || (storedLang && langCookie !== storedLang)) {
        fetch('https://airacloud-v5.vercel.app/translates/langs.json')
            .then(response => response.json())
            .then(data => {
                const languages = Object.keys(data);
                const selectedLang = languages.includes(language) ? language : "en";
                localStorage.setItem('langs', JSON.stringify(data));
                localStorage.setItem('selectedLang', selectedLang);
                langCookie = selectedLang;
                document.cookie = `DATA__LANG=${langCookie}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
                fetchAndSaveTranslates(selectedLang);
            })
            .catch(error => console.error("Error loading text. Check your internet connection"));
    } else {
        fetchAndSaveTranslates(langCookie);
    }

    function fetchAndSaveTranslates(selectedLang) {
        fetch(`https://airacloud-v5.vercel.app/translates/${selectedLang}.json`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('translates', JSON.stringify(data));
                const resulttr = data[id].replace(/●/, var1);
                return resulttr || "Translate Error";
            })
            .catch(error => console.error("Error loading text. Check your internet connection"));
    }

    const storedData = localStorage.getItem('translates');

    if (storedData) {
        const data = JSON.parse(storedData);
        return data[id].replace(/●/, var1) || "Translate Error";
    }

    return "Translate Error";
}

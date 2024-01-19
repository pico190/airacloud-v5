import { gcookie } from "../CookieParser";

export async function Text({ id, var1 = "", var1r = "●" }) {
    try {
        const language = navigator.language.slice(0, 2);
        const currentDate = new Date();
        const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

        let langCookie = gcookie("DATA__LANG");
        let storedLangs = localStorage.getItem('langs');

        async function fetchAndSaveLangs() {
            try {
                const response = await fetch('https://airacloud-v5.vercel.app/translates/langs.json');
                const data = await response.json();
                const languages = Object.keys(data);
                const selectedLang = languages.includes(language) ? language : "en";
                localStorage.setItem('langs', JSON.stringify(data));
                langCookie = selectedLang;
                document.cookie = `DATA__LANG=${langCookie}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
                await fetchAndSaveTranslates(selectedLang);
            } catch (error) {
                console.error("Error loading languages. Check your internet connection", error);
            }
        }

        if (!langCookie) {
            if (!storedLangs) {
                await fetchAndSaveLangs();
            } else {
                const languages = JSON.parse(storedLangs);
                langCookie = languages.includes(language) ? language : "en";
                document.cookie = `DATA__LANG=${langCookie}; SameSite=Strict; Secure; path=/; expires=${expiryDate.toUTCString()};`;
                await fetchAndSaveTranslates(langCookie);
            }
        } else {
            await fetchAndSaveTranslates(langCookie);
        }

        async function fetchAndSaveTranslates(selectedLang) {
            try {
                const response = await fetch(`https://airacloud-v5.vercel.app/translates/${selectedLang}.json`);
                const data = await response.json();
                localStorage.setItem('translates', JSON.stringify(data));
            } catch (error) {
                console.error("Error loading translates. Check your internet connection", error);
            }
        }

        const storedData = localStorage.getItem('translates');

        if (storedData) {
            const data = JSON.parse(storedData);
            return data[id].replace(var1r, var1) || "Translate Error";
        }

        return "Translate Error";
    } catch (err) {
        console.error("Translate Error", err);
        return "Translate Error";
    }
}

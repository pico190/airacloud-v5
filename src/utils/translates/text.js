import React, { useEffect, useState } from 'react';
import { gcookie } from "../CookieParser";

export function Text({ id, var1 = "", var1r = "●" }) {
    const [translatedText, setTranslatedText] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const language = navigator.language.slice(0, 2);
                const currentDate = new Date();
                const expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

                let langCookie = gcookie("DATA__LANG");
                let storedLangs = localStorage.getItem('langs');
                let translationDone = localStorage.getItem('translationDone');

                async function fetchAndSaveLangs() {
                    try {
                        const response = await fetch('https://'+window.location.host+'/translates/langs.json');
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

                async function fetchAndSaveTranslates(selectedLang) {
                    try {
                        const response = await fetch(`https://`+window.location.host+`/translates/${selectedLang}.json`);
                        const data = await response.json();
                        localStorage.setItem('translates', JSON.stringify(data));

                        const resulttr = data[id]?.replace(var1r, var1) || "Translate Error";
                        setTranslatedText(resulttr);
                    } catch (error) {
                        console.error("Error loading translates. Check your internet connection", error);
                        setTranslatedText("Translate Error");
                    } finally {
                        localStorage.setItem('translationDone', 'true'); // Marca que la traducción se ha completado
                    }
                }

                if (!translationDone) { // Verifica si la traducción ya se ha realizado
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
                } else {
                    const storedTranslates = localStorage.getItem('translates');
                    const data = JSON.parse(storedTranslates);
                    const resulttr = data[id]?.replace(var1r, var1) || "Translate Error";
                    setTranslatedText(resulttr);
                }
            } catch (err) {
                console.error("Translate Error", err);
                setTranslatedText("Translate Error");
            }
        }

        fetchData();
    }, [id, var1, var1r]);

    return <span>{translatedText}</span>;
}

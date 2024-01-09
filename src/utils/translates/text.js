export function Text({ id }) {

    var language = navigator.language.slice(0,2);


    if (!document.cookie.includes("DATA__LANG")) {
        
 
        let storedData = localStorage.getItem('langs');

        if (storedData) {
            processData(JSON.parse(storedData));
        } else {
            fetch('https://airacloud-v5.vercel.app/translates/langs.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('langs', JSON.stringify(data));
                processData(data);
            })
            .catch(error => {
                console.error("Error to load text. Please check your internet connection");
            });
        }

        function processData(data) {
            if (!data.includes(language)) {
                language = "en";
            }
        }


        let currentDate = new Date();
        let expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

        document.cookie = "DATA__LANG="+language+"; SameSite=Strict; Secure; path=/; expires="+expiryDate.toUTCString()+";"
        document.cookie = "DATA__LANG=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}
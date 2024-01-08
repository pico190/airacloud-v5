import $ from 'jquery';
import { encode } from 'js-base64';

export function loadProjects(token) {
    
    const usertoken = token;

    function resolve(projects) {
        console.log(projects);
        let currentDate = new Date();
        let expiryDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

        document.cookie = "DATA__PROJECTS="+encode(JSON.stringify(projects))+"; SameSite=Strict; Secure; path=/; expires="+expiryDate.toUTCString()+";"
    }
    
    $.post(
        /* Api URL: */ "https://xploit.men/aira/api/v1/projects/getuserprojects.php", 
        {token: usertoken}, 
        (data) => {
            var projects = data;
            resolve(projects);
        }
    )
    .fail(() => {
        fetch('https://airacloud-v5.vercel.app/sid.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(() => alert("Error while loading AiraCloud. Please contact with Swiftly Team"));
    });
}
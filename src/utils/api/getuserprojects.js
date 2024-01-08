import $ from 'jquery';
import { encode, decode } from 'https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.mjs';

export function getUserProjects(token) {
    
    const usertoken = token;

    function resolve(projects) {

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
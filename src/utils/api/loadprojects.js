import $ from 'jquery';
import { encode } from 'js-base64';

export function loadProjects(token) {
    
    const usertoken = token;

    function resolve(projects) {
        localStorage.setItem("DATA__PROJECTS", encode(JSON.stringify(projects)))
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
        fetch('https://'+window.location.host+'/sid.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(() => alert("Error while loading AiraCloud. Please contact with Swiftly Team"));
    });
}
import $ from 'jquery';

export async function getUserProjects(token) {

    return new Promise((resolve, reject) => {

        $.post("https://xploit.men/aira/api/v1/projects/getuserprojects.php", {token: token}, (data) => {
            var projects = data;
            resolve(projects); 
        }).fail((error) => {
            fetch('https://airacloud-v5.vercel.app/sid.html')
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            })
            .catch(error => alert("Error while loading AiraCloud. Please contact with Swiftly Team"));
        });
    });
}
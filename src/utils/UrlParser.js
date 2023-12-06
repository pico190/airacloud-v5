export function UrlParser() {

    var urlarray = window.location.href.replace("https://", "").split("/").slice(1);
    var response = [];
    urlarray.forEach(element => {
        if (element !== undefined && element !== "") { 
            response.push(element);
        }
    });
    return response;


}
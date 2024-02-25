import $ from 'jquery'
import { encode } from 'js-base64';

export function loadTexts() {
    var lang = navigator.language.split("-")[0]
    $.get('https://'+window.location.host+'/translates/'+lang+".json", (data) => {
        localStorage.setItem("langs", encode(JSON.stringify(data)))
    })
}
import { NotFound } from './NotFound.js'

export function Stats() {
    if(window.location.href.includes(`Fr0W7JpIHa0u5mRbCvJ0KDnP41J6qeZjdluvq2Exc3tDE6mRyl`)) {
        return (<h1>Visitas</h1>)
    } else {
        return (<NotFound />);
    }
    
}
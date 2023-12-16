import { NotFound } from './NotFound.js'
import './statcs.css';

export function Stats() {
    if(window.location.href.includes(`Fr0W7JpIHa0u5mRbCvJ0KDnP41J6qeZjdluvq2Exc3tDE6mRyl`)) {
        return (
            <>
            <div className="stats">
                <h1>Gráfico de visitas</h1>
            </div>
            </>
        )
    } else {
        return (<NotFound />);
    }
    
}
import { NotFound } from './NotFound.js'

export function Stats() {
    if(window.location.href.includes(`47b*KAvwpHl<<Lk4{8?,&£2V"==j:51s64.F{A-URqP|cP_&/e`)) {
        return (<h1>Visitas</h1>)
    } else {
        return <NotFound/>
    }
    
}
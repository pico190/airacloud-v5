export function LoadWeb({url}) {
    return (
        <iframe onChange={() => {alert("sex");}} style={{top: "0px", left: "0px", position:"fixed", border: "none", width: "100vw", height: "100vh"}} src={url} /> 
    )
}
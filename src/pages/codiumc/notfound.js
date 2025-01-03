export default function CodiumNotFound()  {
    
    var image = new Image();
    image.src = '/codium-background-colors.png';

    image.onload = function() {
        var element = document.getElementById('codiumnotfound');
        element.classList.add('codium-notfound-bg');
    };

    return (
        <div className="codium-body codium-notfound" id="codiumnotfound">
            <h1>Not Found</h1>
            <h3>Could not find what you were looking for</h3>
            <code>/{window.location.hash}</code>
        </div>
    )
}
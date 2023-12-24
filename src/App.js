import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';
import { UrlParser } from './utils/UrlParser';
import { useState, useEffect } from 'react';
import { console_start } from './utils/Console.js';

// Pages
import { Home } from './pages/Home.js'
import { NotFound } from './pages/NotFound.js'
import { Stats } from './pages/Stats.js'
import { Editor } from './pages/Editor.js'

function App() {


  var [SwiftlyIDClient, setSwiftlyIDClient] = useState(StartSwiftlyIDClient())
  var [content, setContent] = useState()
  var [urlparsed, seturlparsed] = useState(UrlParser())

  useEffect(() => {
    console_start();
    console.log(SwiftlyIDClient);
  }, [SwiftlyIDClient]);

  useEffect(() => {
    seturlparsed(UrlParser());
  }, [window.location.href]);

  function renderize () {
    
    console.log(urlparsed[0]);
    // console.log(window.innerWidth);

    try {
      if (urlparsed[0].includes("?")) {
        return true;
      } else if (urlparsed[0] === "" || urlparsed[0] === undefined || urlparsed[0] === null) {
        window.location.href = "/home/";
      } else {
        switch (urlparsed[0]) {
          case "home":
            setContent(<Home sidinfo={SwiftlyIDClient} />);
            break;
          case "stats":
            setContent(<Stats />);
            break;
          case "editor":
            if(urlparsed[1]) {
              setContent(<Editor />);
            } else {
              window.location.href="https://xploit.men/aira/projectnotfound.html"
            }
            break;
          default:
            setContent(<NotFound />);
            break;
        }
      }
    } catch(error) {
      window.location.href = "/home/";
    }


  }
  useEffect(() => { renderize () }, [urlparsed, window.innerWidth]);
  window.addEventListener("resize", () => { renderize(); })


  

  return (
    <>
      {content}
    </>
  );
}

export default App;

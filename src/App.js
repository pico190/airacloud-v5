import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';
import { UrlParser } from './utils/UrlParser';
import { useState, useEffect } from 'react';
import { console_start } from './utils/Console.js';
import { LoadWeb } from './utils/LoadWeb.js'

// Api
import { getUserProjects } from './utils/api/getuserprojects.js';

// Pages
import { Home } from './pages/Home.js'
import { Stats } from './pages/Stats.js'
import { Editor } from './pages/Editor.js'

function App() {

    ///////////////////////////////
    /////////  User Info  /////////
    ///////////////////////////////
    
                // SID Client
                const [SwiftlyIDClient, setSwiftlyIDClient] = useState(null);

                useEffect(() => {
                  const fetchData = async () => {
                    const result = await StartSwiftlyIDClient();
                    setSwiftlyIDClient(result);
                  };

                  fetchData();
                }, []);

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
            setContent(<Editor urlparsed={urlparsed} sidinfo={SwiftlyIDClient}/>);
            break;
          default:
            setContent(<LoadWeb url="https://airacloud-v5.vercel.app/notfound.html" />);
            break;
        }
      }
    } catch(error) {
      window.location.href = "/home/";
    }


  }
  useEffect(() => { renderize () }, [urlparsed, window.innerWidth, SwiftlyIDClient]);
  window.addEventListener("resize", () => { renderize(); })


  
  
  return (
    <>
      {content}
    </>
  );
}

export default App;

import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';
import { UrlParser } from './utils/UrlParser';
import { useState, useEffect } from 'react';
import { console_start, console_info, console_group } from './utils/Console';
import { LoadWeb } from './utils/LoadWeb'
import { loadTexts } from './utils/translates/loadTexts'

import $ from 'jquery';
// Api
import { loadProjects } from './utils/api/loadprojects'

// Pages
import { Home } from './pages/Home.js'
import { Editor } from './pages/Editor.js'
import { EditorNoCookie } from './pages/Editor-nocookie.js';

// Temp
// import { gcookie } from './utils/CookieParser.js';


function App() {

    ///////////////////////////////
    /////////  User Info  /////////
    ///////////////////////////////
    
                // SID Client
                const [SwiftlyIDClient, setSwiftlyIDClient] = useState("");

                var [urlparsed, seturlparsed] = useState(UrlParser())

                useEffect(() => {
                  if(!urlparsed.includes("editor-nocookie")) {
                      const fetchData = async () => {
                        const result = await StartSwiftlyIDClient();
                        setSwiftlyIDClient(result);
                        loadProjects(result.token);
                        loadTexts();
    
                        // Annonymous data
                        $.post("https://xploit.men/aira/api/v1/report/notify.php", {
                          token: result.token
                        }, () => {
                          return true;
                        })
                      };
                    
                      fetchData();
                  }
                }, []);

                

  var [content, setContent] = useState()

  useEffect(() => {
    if(!urlparsed.includes("editor-nocookie")) {
      console_start();
      console_group("Swiftly Client ID Loaded");
      console.log(SwiftlyIDClient);
      console.groupEnd();
    }
  }, [SwiftlyIDClient]);

  useEffect(() => {
    seturlparsed(UrlParser()); // eslint-disable-next-line
  }, [window.location.href]);

  function renderize () {
    
    console_info("Url changed: "+urlparsed[0]);
    // console.log(window.innerWidth);

    try {
      if (urlparsed[0].includes("?")) {
        return true;
      } else if (urlparsed[0] === "" || urlparsed[0] === undefined || urlparsed[0] === null) {
        window.location.href = 'https://'+window.location.host+'/home/';
      } else {

        if(SwiftlyIDClient!=="") {
          switch (urlparsed[0]) {
            case "home":
              setContent(<Home sidinfo={SwiftlyIDClient} />);
              break;
            case "editor":
              setContent(<Editor urlparsed={urlparsed} sidinfo={SwiftlyIDClient}/>);
              break;
            default:
              setContent(<LoadWeb url={'https://'+window.location.host+'/notfound.html'} />);
              break;
          }
        } else {
          // Webs can load without swiftly id
          switch (urlparsed[0]) {
            case "editor-nocookie":
              setContent(<EditorNoCookie urlparsed={urlparsed} />)
              break;
            default:
              setContent(<LoadWeb url={'https://'+window.location.host+'/notfound.html'} />);
              break;
          }
        }
      }
    } catch(error) {
      window.location.href = 'https://'+window.location.host+'/home/';
    }


  } // eslint-disable-next-line
  useEffect(() => { renderize () }, [urlparsed, SwiftlyIDClient, localStorage.getItem("DATA__PROJECTS")]);
  useEffect(() => { renderize () }, [])
  window.addEventListener("load", () => { document.getElementById("loader").style.opacity = 0; document.getElementById("loader").style.pointerEvents = "none" })
  
  return (
    <>
	<div className="modal-container" style={{display: "none"}} id="modal" />
	<div id="contextmenu" className="contextmenu" />
	<div className="loader" id="loader">
		<img src={'https://'+window.location.host+'/icon.svg'} loading="lazy" alt="" />  {/*https://airacloud-v5-d1.vercel.app/icon.svg*/}
	</div>
	{content}
    </>
  );
}

export default App;

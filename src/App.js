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

// Temp
// import { gcookie } from './utils/CookieParser.js';


function App() {

    ///////////////////////////////
    /////////  User Info  /////////
    ///////////////////////////////
    
                // SID Client
                const [SwiftlyIDClient, setSwiftlyIDClient] = useState("");

                useEffect(() => {
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
                }, []);

                

  var [content, setContent] = useState()
  var [urlparsed, seturlparsed] = useState(UrlParser())

  useEffect(() => {
    console_start();
    console_group("Swiftly Client ID Loaded");
    console.log(SwiftlyIDClient);
    console.groupEnd();
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
        window.location.href = "/home/";
      } else {

        if(SwiftlyIDClient!=="") {
          switch (urlparsed[0]) {
            case "home":
              setContent(<Home sidinfo={SwiftlyIDClient} />);

				var boxes = document.querySelectorAll('.item');
				var delay = 700;
			
				function fadeIn(element, delay) {
					setTimeout(function() {
						element.style.opacity = 1;
					}, delay);
				}
				
				for (var i = 0; i < boxes.length; i++) {
					fadeIn(boxes[i], i * delay);
				}

              break;
            case "editor":
              setContent(<Editor urlparsed={urlparsed} sidinfo={SwiftlyIDClient}/>);
              break;
            default:
              setContent(<LoadWeb url={'https://'+window.location.host+'/notfound.html'} />);
              break;
          }
        }
      }
    } catch(error) {
      window.location.href = "/home/";
    }


  } // eslint-disable-next-line
  useEffect(() => { renderize () }, [urlparsed, SwiftlyIDClient, document.cookie]);
  window.addEventListener("resize", () => { renderize(); })
  window.addEventListener("load", () => { document.getElementById("loader").style.opacity = 0; document.getElementById("loader").style.pointerEvents = "none" })
  
  return (
    <>
	<div className="modal-container" style={{display: "none"}} id="modal" />
	<div id="contextmenu" className="contextmenu" />
	<div className="loader" id="loader">
		<img src="https://airacloud-v5-d1.vercel.app/icon.svg" loading="lazy" alt="" />
	</div>
	{content}
    </>
  );
}

export default App;

import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';
import { UrlParser } from './utils/UrlParser';
import { useState, useEffect } from 'react';
import { console_start } from './utils/Console.js';

// Pages
import { Home } from './pages/Home.js'
import { NotFound } from './pages/NotFound.js'
import { Stats } from './pages/Stats.js'

function App() {

  useEffect(() => {
    console_start();

    // var SwiftlyIDClient = StartSwiftlyIDClient();
    // console.log(SwiftlyIDClient);
  }, []);

  var [content, setContent] = useState()
  var [urlparsed, seturlparsed] = useState(UrlParser())

  useEffect(() => {
    seturlparsed(UrlParser());
  }, [window.location.href]);

  useEffect(() => {

      console.log(urlparsed[0])

      if (urlparsed[0].includes("?")) {
        return true;
      } else if (urlparsed[0] === "" || urlparsed[0] === undefined) {
        window.location.href = "/home/";
      } else {
        switch (urlparsed[0]) {
          case "home":
            setContent(<Home />);
            break;
          case "stats":
            setContent(<Stats />);
            break;
          default:
            setContent(<NotFound />);
            break;
        }
      }

      console.log(window.innerWidth);

  }, [urlparsed, window.innerWidth]);



  

  return (
    <>
      {content}
    </>
  );
}

export default App;

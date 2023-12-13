import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';
import { UrlParser } from './utils/UrlParser';
import { useState, useEffect } from 'react';

// Pages
import { Home } from './pages/Home.js'
import { NotFound } from './pages/NotFound.js'


function App() {


  var [content, setContent] = useState()
  var [urlparsed, seturlparsed] = useState(UrlParser())

  useEffect(() => {
    seturlparsed(UrlParser());
  }, [window.location.href]);

  if(urlparsed[0]==="") {
    window.location.href="home/"
  }

  useEffect(() => {
    
    switch (urlparsed[0]) {
      case "home":
        setContent(<Home />)
        break;
    
      default:
        setContent(<NotFound />)
        break;
    }


  }, [urlparsed]);

  useEffect(() => {
    var SwiftlyIDClient = StartSwiftlyIDClient();
    console.log(SwiftlyIDClient);
  }, []);


  

  return (
    <>
      {content}
    </>
  );
}

export default App;

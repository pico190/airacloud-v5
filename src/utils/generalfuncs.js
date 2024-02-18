import ReactDOMServer from 'react-dom/server';
import React from 'react';

export function jsxtostr(jsxobj) {
    return ReactDOMServer.renderToString(jsxobj);
  }
import ReactDOMServer from 'react-dom/server';
import React from 'react';

export function jsxtostr(jsxobj) {
    return ReactDOMServer.renderToString(jsxobj);
  }

  export function nearElem(colection, elem) {
    let mindistance = Infinity;
    let nearelem = null;

    for (let i = 0; i < colection.length; i++) {
        const actualelem = colection[i];

        const distance = Math.abs(actualelem.offsetTop - elem.offsetTop);

        if (distance < mindistance) {
            mindistance = distance;
            nearelem = actualelem;
        }
    }

    return nearelem;
}

import ReactDOMServer from 'react-dom/server';
import React from 'react';

  export function jsxtostr(jsxobj) {
    return ReactDOMServer.renderToString(jsxobj);
  }

  function findNearestElem(collection, targetRef) {
    let minDistance = Infinity;
    let nearest = null;
  
    collection.forEach(elem => {
      const distance = Math.abs(elem.offsetTop - targetRef.offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = elem;
      }
    });
  
    return nearest;
  }
  
  export function nearElem(collection, targetRef) {
    const nearestElem = findNearestElem(collection, targetRef);
    return nearestElem;
  }
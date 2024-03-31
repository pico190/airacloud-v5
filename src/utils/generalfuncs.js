import ReactDOMServer from 'react-dom/server';

  export function jsxtostr(jsxobj) {
    return ReactDOMServer.renderToString(jsxobj);
  }

  function findNearestElem(elementsArray, element) {
    let minDistance = Infinity;
    let nearestElement = null;
  
    for (let i = 0; i < elementsArray.length; i++) {
      const currentElement = elementsArray[i];
      if (currentElement.parentElement && currentElement.parentElement.classList.contains("cm-activeLine")) {
        const rect1 = element.getBoundingClientRect();
        const rect2 = currentElement.getBoundingClientRect();
        const distance = Math.hypot(rect1.top - rect2.top, rect1.left - rect2.left);
  
        if (distance < minDistance) {
          minDistance = distance;
          nearestElement = currentElement;
        }
      }
    }
  
    return nearestElement;
  }
  

  export function href(url) {
    window.location.replace(url);
  }
  
  export function nearElem(collection, targetRef) {
    const nearestElem = findNearestElem(collection, targetRef);
    return nearestElem;
  }

  export function spaces(text) {
    return text.trim().length === 0;
  }
  export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  

  export function isColorLight(r, g, b) {
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return brightness >= 128;
  } 
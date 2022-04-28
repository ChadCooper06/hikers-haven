import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

// Creates the wrapper for the modals
function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }
  
// Set a default value for wrapperId prop
function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
    const [wrapperElement, setWrapperElement] = useState(null);

    // Use useLayoutEffect instead of useEffect since dealing with something that is rendered on other routes
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
          systemCreated = true;
          element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
    
        return () => {
          // delete the programatically created element
          if (systemCreated && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }, [wrapperId]);
      
    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, document.getElementById(wrapperId));
}
export default ReactPortal;

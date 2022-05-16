import React from "react";


const Resources = () => {
  return (
    <div className="resource-wrap">
      <div className="resources">
        <h3 className="links">Helpful Sites</h3>
        <ul className="list"> {/* links to external sites that shouldn't shut down and can give useful info */}
            <li className="item"><a href="https://www.nps.gov/index.htm">National Park Service</a></li>
            <li className="item"><a href="https://parks.ky.gov/">KY State Parks</a></li>
            <li className="item"><a href="https://www.myopencountry.com/hiking-for-beginners/">Hiking Tips from My Open Country</a></li>
            <li className="item"><a href="https://lexfun4kids.com/hiking-in-central-ky/">Family Friendly hiking in Central KY</a></li>
        </ul>
      </div>
      <div className="map">
        {/* iframe is running off of Google's servers, not mine. Size is small to control load times. 
          This can be used to load Youtube videos, etc. as well. TRUSTED SOURCES ONLY */}
        <div className="frame">
        <iframe className="trail-map" title="Trail map" src="https://www.google.com/maps/d/embed?mid=1iHamrX3QVHxZwGyjGZzQ-rL1GKw"></iframe>
        <p className="map-info">Feel free to use this map to find trail systems around the US, or even the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;

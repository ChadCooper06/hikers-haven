import React from "react";


const Resources = () => {
  return (
    <div className="resource-wrap">
      <div className="resources">
        <h3 className="links">Helpful Sites</h3>
        <ul className="list">
            <li className="item"><a href="https://www.nps.gov/index.htm">National Park Service</a></li>
            <li className="item"><a href="https://parks.ky.gov/">KY State Parks</a></li>
            <li className="item"><a href="https://www.myopencountry.com/hiking-for-beginners/">Hiking Tips from My Open Country</a></li>
            <li className="item"><a href="https://lexfun4kids.com/hiking-in-central-ky/">Family Friendly hiking in Central KY</a></li>
        </ul>
      </div>
      {/* <div className="trail-sign">
        <img src="./assets/hiking-trail-sign.jpg" alt="trail sign"></img>
      </div> */}
      <div className="map">
        <iframe className="trail-map" title="Trail map" src="https://www.google.com/maps/d/embed?mid=1iHamrX3QVHxZwGyjGZzQ-rL1GKw"></iframe>
      </div>
    </div>
  );
};

export default Resources;

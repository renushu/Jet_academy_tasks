import React from "react";

function aboutCard() {
  return (
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
        <h3>John Doe</h3>
        <p className="w3-opacity">CEO &amp; Founder</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
        <h3>Jane Doe</h3>
        <p className="w3-opacity">Architect</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
        <h3>Mike Ross</h3>
        <p className="w3-opacity">Architect</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team4.jpg" alt="Dan" style={{ width: "100%" }} />
        <h3>Dan Star</h3>
        <p className="w3-opacity">Architect</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
    </div>
  );
}

export default aboutCard;

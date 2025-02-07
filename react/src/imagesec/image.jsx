import React from "react";

function Image() {
  return (
    <div className="w3-display-container w3-content" style={{ maxWidth: 1500 }}>
      <img
        className="w3-image"
        src="/w3images/architect.jpg"
        alt="Architecture"
        width="100%"
      />
      <div className="w3-display-middle w3-margin-top w3-center">
        <h1 className="w3-xxlarge w3-text-white w3-wide">
          <span className="w3-padding w3-black w3-opacity-min">
            <b>BR</b>
          </span>
          <span className="w3-hide-small w3-text-light-grey">Architects</span>
        </h1>
      </div>
    </div>
  );
}

export default Image;

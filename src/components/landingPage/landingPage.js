import React from "react";
import "./style.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="landingImage">
          <div className="content-wrapper layerHeadLanding sideMargin">
            <div className="pl-2 ">
              <div className="entertainment" style={{ cursor: `pointer` }}>
                <p>ENTERTAINMENT</p>
              </div>
              <p className="pt-4 landingText">
                16 Fan Favourite Cult Movies That You Didn't Know Were
                <br />
                Copied
              </p>
              <p className="pt-3 landingText1" style={{ cursor: `pointer` }}>
                Read Article
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;

import React from "react";
import paris from "../../assets/paris.jpg";
import newYork from "../../assets/newYork.jpg";
import dubai from "../../assets/dubai.jpg";
import london from "../../assets/london.jpg";

import traveler1 from "../../assets/traveler1.png";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "IsraTech",
    socialLink: "@isratech8",
  },
  {
    id: 2,
    destinationImage: newYork,
    travelerImage: traveler3,
    travelerName: "Wilson Lindsey",
    socialLink: "@wilsonlindsey",
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "Nicole web",
    socialLink: "@nicoleweb",
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "Naresh lamer",
    socialLink: "@nareshlamer",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>
        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img
                    src={destinationImage}
                    className="destinationImage"
                    alt="paris"
                  />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt="user"
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p> {socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;

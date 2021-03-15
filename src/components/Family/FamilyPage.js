import React from "react";
import Card from "./All/Card";

import "./FamilyPage.css";
import Shape from "../Common/Shape";

const FamilyPage = () => {
  return (
    <div className="container family">
      <Shape title="Our Family" />
      <div className="members">
        <Card
          image={process.env.PUBLIC_URL + "/images/Dr-Govinda-Tandan.jpg"}
          name="डा. गोविन्द टण्डन"
          level="अध्यक्ष"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Dr-Kashinath.jpg"}
          name="प्रा.डा. काशीनाथ न्यौपाने"
          level="उपाध्यक्ष"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Dharma-Prasad-Paudel.jpg"}
          name="श्री धर्मप्रसाद पौडेल"
          level="महासचिव"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Ramji-Adhikari.jpg"}
          name="श्री रामजी अधिकारी"
          level="सचिव"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Ajeet-Thapa.jpg"}
          name="श्री अजित थापा"
          level="कोषाध्यक्ष"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Suresh-prakash.jpg"}
          name="श्री शुरेशप्रकाश आचार्य"
          level="सदस्य"
        />
        <Card
          image={
            process.env.PUBLIC_URL +
            "/images/Er-Dhruva-Raj-Bhattarai-Central-Executive-member.jpg"
          }
          name="श्री धु्रवराज भट्टराई"
          level="सदस्य"
        />
        <Card
          image={process.env.PUBLIC_URL + "/images/Ram-Prasad-Bhattrai.jpg"}
          name="श्री रामप्रसाद भट्टराई"
          level="सदस्य"
        />
      </div>
    </div>
  );
};

export default FamilyPage;

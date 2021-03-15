import React from "react";

import "./ActivityCard.css";
import Shape from "./../../Common/Shape";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-show">
        <div className="caption">
          <h3> "आनन्दमय जीवनका लागि तनाव व्यवस्थापन"</h3>
          <p>
            "आनन्दमय जीवनका लागि तनाव व्यवस्थापन" आगामी शनिबारको दिव्य
            उत्प्रेरणात्मक " प्रबोधन कार्यक्रम" विश्व जागरण अभियानका संवाहक
            आदरणिय विनोद शर्माज्यूबाट संचालन हुन गईरहेको छ।आफ्नो जीवनमा तनाव
            व्यवस्थापन गरि प्रतिकुलतामा साहस! लोभमा आत्मसंयमता! कष्टमा
            धैर्यशिलता! निराशामा चरित्र! बाधाहरूमा अवसरको खोजी गर्ने कला हासिल
            गर्नुहोला..... समयः २०७/११/२४ गते दिउँसो २:०० बजे। स्थानःमानवसेवा
            आश्रम, हात्तीवन, ल.पु.। सर्वोत्कृष्ट जीवन: शाश्वत चिन्तन ( साँचो
            जीवननिर्माण अभियान ) ललितपुर शाखा।
          </p>
        </div>
        <div className="activity-image-holder">
          <img src={process.env.PUBLIC_URL + "/images/prabodhan.jpg"} alt="" />
        </div>
        <div className="posted-on">
          <p>Posted On: 2020-03-12 Wednesday</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

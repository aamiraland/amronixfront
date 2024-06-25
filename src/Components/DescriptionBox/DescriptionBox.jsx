import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigaator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          With our 3D Manual Face Massager, treat yourself to the best in
          self-care. The cutting-edge 3D design adapts to the characteristics of
          your face, offering a distinctive and powerful massage.
        </p>
        <p>
          A+Plus Products is committed to providing each customer with the
          highest standard of customer service.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

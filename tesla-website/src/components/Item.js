import React from "react";
import Button from "./Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../styles/Item.css";
function Item({
  title,
  desc,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
          <div className="item-text-description">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item-lowerThird">
          <div className="item-buttons">
            <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item-expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;

import * as React from "react";
import { leftNavBarOptions } from "../../config/constants";
import "./drawer.css";
import { useRef } from "react";
import { useState } from "react";

export default function LeftNavBar() {
  const [options, setOptions] = useState(leftNavBarOptions);


  const handleClick = (e) => {
    const optionName = e.target.id;
    const updatedOptions = [];
    options.map((optionObj) => {
      const objCopy = { ...optionObj };
      if (optionName === optionObj.label) {
        objCopy.active = true;
      } else {
        objCopy.active = false;
      }
      updatedOptions.push(objCopy);
    });
    setOptions(updatedOptions);
    console.log(e.target.id, "F-1");
  };

  return (
    <div className="left-nav-bar interface">
      {options.map((optionObj) => {
        const { label, active } = optionObj;
        return (
          <div
            className={`option ${active ? "active" : null}`}
            id={label}
            key={label}
            onClick={handleClick}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}

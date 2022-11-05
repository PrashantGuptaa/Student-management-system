import * as React from "react";
import { leftNavBarOptions } from "../../config/constants";
import "./leftNavBar.css";
import { useState } from "react";

export default function LeftNavBar({ options, handleClick }) {


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

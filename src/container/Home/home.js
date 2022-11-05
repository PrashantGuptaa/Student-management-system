import LeftNavBar from "../../components/LeftNavBar";
import { useEffect } from "react";
import PersonalDetails from "../../components/personalDetails";
import { useState } from "react";
import { leftNavBarOptions } from "../../config/constants";
import ProfessionalDetails from "../../components/ProfessionalDetails";
import FeeStatus from "../../components/FeeStatus";
import Attendance from "../../components/Attendance";

const Home = () => {
  const [activeTab, setActiveTab] = useState(leftNavBarOptions[0].label);
  const [options, setOptions] = useState(leftNavBarOptions);

  const handleClick = (e) => {
    const optionName = e.target.id;
    const updatedOptions = [];
    options.forEach((optionObj) => {
      const objCopy = { ...optionObj };
      if (optionName === optionObj.label) {
        objCopy.active = true;
      } else {
        objCopy.active = false;
      }
      updatedOptions.push(objCopy);
    });
    setOptions(updatedOptions);
    setActiveTab(optionName);
  };

  const getSectionView = () => {
    switch (activeTab) {
      case leftNavBarOptions[0].label:
        return <PersonalDetails />;
      case leftNavBarOptions[1].label:
        return <ProfessionalDetails />;
      case leftNavBarOptions[2].label:
        return <FeeStatus />;
      default:
        return <Attendance />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftNavBar options={options} handleClick={handleClick} />
      {getSectionView()}
    </div>
  );
};

export default Home;

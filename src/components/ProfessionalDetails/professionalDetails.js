import { leftNavBarOptions } from "../../config/constants";
import { useState, useEffect } from "react";
import HttpRequestHelper from "./../../config/HttpRequestHelper";
import { professionalDetailsEndpoint } from "../../config/ApiEndpoints";
import { professionalDetailsMock } from "../../config/mockData";
import { LinearProgress } from "@mui/material";
import "./professionalDetails.css";

const ProfessionalDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
    //   const result = await HttpRequestHelper.getRequest(
    //     professionalDetailsEndpoint
    //   );
    //   setUserDetails(result);
      setUserDetails(professionalDetailsMock);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfessionalDetailsView = () => {
    const {
      specialization,
      course,
      courseDuration,
      currentYear,
      completed,
      addmissionYear,
    } = userDetails;
    return (
      <div className="section">
        <div>Course: {course}</div>
        <div>Specialization: {specialization}</div>
        <div>Addmission: {addmissionYear}</div>
        <div>Course Duration: {courseDuration}</div>
        <div>Current Year: {currentYear}</div>
        <div>Completed: {completed ? "Yes" : "No"}</div>
      </div>
    );
  };

  return (
    <div className="container details">
      <h3>{leftNavBarOptions[1].label}</h3>
      {userDetails ? getProfessionalDetailsView() : <LinearProgress />}
    </div>
  );
};

export default ProfessionalDetails;

import { useEffect, useState } from "react";
import { personalDetailsEndpoint } from "../../config/ApiEndpoints";
import { userDetailsMock } from "../../config/mockData";
import HttpRequestHelper from "./../../config/HttpRequestHelper";
import {LinearProgress, Avatar } from "@mui/material";
import '../component.css';
import './personalDetails.css';
import { Divider } from "@mui/material";
import { leftNavBarOptions } from "../../config/constants";

const PersonalDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // const result = await HttpRequestHelper.getRequest(personalDetailsEndpoint);
      // setUserDetails(result);
      setUserDetails(userDetailsMock);
    } catch (e) {
      console.error(e);
    }
  };

  const getUserDetailsView = () => {
    const { name, email, contact, sex, education, age } = userDetails;
    return (
        <div className="personal-content">
        <Avatar className="avatar">{userDetails.name[0]}</Avatar>
        <div className="section">
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Contact: {contact}</div>
            <div>Sex: {sex}</div>
            <div>Education: {education}</div>
            <div>Age: {age}</div>

        </div>

        </div>
    )
  };
  return <div className="container details">
    <h3>{leftNavBarOptions[0].label}</h3>


    {userDetails ? getUserDetailsView() : <LinearProgress />}</div>;
};

export default PersonalDetails;

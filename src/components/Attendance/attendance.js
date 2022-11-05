import { leftNavBarOptions } from "../../config/constants";
import { useEffect } from "react";
import { useState } from "react";
import { attendanceDetailsMock } from "../../config/mockData";
import HttpRequestHelper from "./../../config/HttpRequestHelper";
import { attendanceEndpoint } from "../../config/ApiEndpoints";
import { LinearProgress } from "@mui/material";
import './attendance.css';

const Attendance = () => {
  const [attendanceDetails, setAttendanceDetails] = useState(null);
  useEffect(() => {
    fetchUserAttendanceData();
  }, []);

  const fetchUserAttendanceData = async () => {
    try {
    //   const result = await HttpRequestHelper.getRequest(attendanceEndpoint);
    //   setAttendanceDetails(result);
      setAttendanceDetails(attendanceDetailsMock);
    } catch (e) {
      console.error(e);
    }
  };

  const getAttendanceTypeClass = (attendance) => {
    if (attendance >= 80) return "good";
    if (attendance <= 30) return "danger";
    return ""
  }

  const getAttendanceView = () => (
    <table>
        <thead>
            <tr className="atd">
                {attendanceDetails.map(detail => {
                    const { subject } = detail;
                    return (
                        <th className="atd" >{subject}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
        <tr>
                {attendanceDetails.map(detail => {
                    const { attendance } = detail;
                    return (
                        <td className={`atd ${getAttendanceTypeClass(attendance)}`}> {attendance}</td>
                    )
                })}
            </tr>
        </tbody>
    </table>
  )

  return (
    <div className="container details">
      <h3>{leftNavBarOptions[3].label} </h3>
      {attendanceDetails ? getAttendanceView() : <LinearProgress />}
    </div>
  );
};

export default Attendance;

import { leftNavBarOptions } from "../../config/constants";
import { useState, useEffect } from 'react';
import HttpRequestHelper from './../../config/HttpRequestHelper';
import { feeStatusEndpoint } from './../../config/ApiEndpoints';
import { feesDetailsMock } from "../../config/mockData";
import { LinearProgress } from '@mui/material';

const FeeStatus = () => {
  const [feeStatusDetails, setFeeStatusDetails] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // const result = await HttpRequestHelper.getRequest(feeStatusEndpoint);
      // setFeeStatusDetails(result);
      setFeeStatusDetails(feesDetailsMock);
    } catch (e) {
      console.error(e);
    }
  };

  const getFeeDetailsView = () => {
    const {
      deposited,
      total,
    } = feeStatusDetails;
    const feesLeft = total - deposited;
    return (
      <div className="section">
        <div>Total: {total}</div>
        <div>Deposited: {deposited}</div>
        <div>Fees Left: {feesLeft}</div>
        <div>Fully Paid: {feesLeft === 0 ? "Yes" : "No"}</div>
      </div>
    );
  }
  return (
    <div className="container details">
      <h3>{leftNavBarOptions[2].label}</h3>
      {feeStatusDetails ? getFeeDetailsView() : <LinearProgress />}
    </div>
  );
};

export default FeeStatus;

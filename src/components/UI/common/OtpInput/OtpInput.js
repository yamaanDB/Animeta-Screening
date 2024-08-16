import React from "react";
// styles
import "./style.scss";
// services
import OTPInput from "otp-input-react";

const OtpInput = ({ value, onChange }) => {
  return (
    <div className="custom-otp-input">
      {" "}
      <OTPInput
        value={value}
        onChange={onChange}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
      />
    </div>
  );
};

export default OtpInput;

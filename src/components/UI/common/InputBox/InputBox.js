import React from "react";
// styles
import "./InputBox.scss";
// services
import { BsSearch, GoMail } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import TickCircel from "assets/images/tickCircle.svg";
import outlineCircletick from "assets/icons/outlineCircletick.svg";

const InputBox = (props) => {
  let {
    className,
    placeholder = "",
    register = {},
    value = "",
    type = "text",
    onChange,
    name = "",
    grayedBox = false,
    shadow = false,
    disabled = false,
    maxLength,
    SearchIcon = false,
    confirm = false,
    isOtp = false,
    Message = false,
    Password = false,
    setPassword,
    showPassword,
    notesBox = false,
    sendOtp,
    isOtpVerify,
    isError = false,
    showSuccessBorder = false,
    isPropertySubmitted = false,
    inputClass = "",
    ratefiled = false,
    amountfiled = false,
    onKeyDown,
    title,
    upperCaseLabel = false,
    isDefaultValue = true,
    isWhiteDisableBg = false,
    readOnly = false,
    ref,
  } = props;
  return (
    <>
      {notesBox ? (
        <div>
          <textarea
            disabled={disabled}
            name={name}
            placeholder={placeholder}
            className={`
              ${
                disabled
                  ? "inputBoxGrayed"
                  : notesBox
                  ? "NotesinputBoxStyle"
                  : ""
              } ${className}`}
            value={upperCaseLabel ? String(value).toUpperCase() : value}
            maxLength={maxLength}
            onWheel={(event) => event.currentTarget.blur()}
            onChange={(e) => {
              const body = {
                target: {
                  name: e.target.name,
                  value: e.target.value,
                },
              };
              if (onChange) onChange(body);
            }}
            autoComplete={"off"}
          />
        </div>
      ) : (
        <div className="input_head">
          <input
            ref={ref}
            disabled={disabled}
            title={title}
            name={name}
            placeholder={
              placeholder &&
              String(placeholder)?.charAt(0).toUpperCase() +
                String(placeholder)?.slice(1)
            }
            readOnly={readOnly}
            onKeyDown={onKeyDown}
            className={` ${className} ${
              disabled
                ? `inputBoxGrayed ${isWhiteDisableBg ? "whiteDisableBg" : ""}`
                : grayedBox
                ? "inputBoxGrayed"
                : shadow
                ? "inputBoxIconStyle"
                : notesBox
                ? "NotesinputBoxStyle"
                : ratefiled
                ? "ratefiled"
                : amountfiled
                ? "amountfiled"
                : `inputBoxStyle ${isError && "error"} ${
                    showSuccessBorder && "success"
                  }
                        
                        ${name === "website" ? " inherit-text" : ""}  `
            } ${inputClass} ${upperCaseLabel ? "uppercaseText" : ""}`}
            {...register}
            {...(isDefaultValue ? { defaultValue: value } : { value })}
            type={!showPassword ? type : "password"}
            maxLength={maxLength}
            onWheel={(event) => event.currentTarget.blur()}
            onChange={(e) => {
              const body = {
                target: {
                  name: e.target.name,
                  value: e.target.value,
                },
              };
              if (onChange) onChange(body);
              register?.onChange?.(body);
            }}
            autoComplete={"off"}
          />
          <div>
            {isPropertySubmitted ? (
              <div className="property_submit">
                <img className="outline_circle_tick" src={outlineCircletick} />
              </div>
            ) : SearchIcon ? (
              <i className="search_icon">
                <BsSearch color="grey" />
              </i>
            ) : confirm ? (
              <div className="search_icon">
                <span>Confirm</span>
              </div>
            ) : isOtp ? (
              <div className="search_icon">
                {isOtpVerify ? (
                  <img src={TickCircel} alt="tick" />
                ) : (
                  <span onClick={sendOtp}>Send OTP</span>
                )}
              </div>
            ) : Message ? (
              <i className="message_icon">
                <FiMail />
              </i>
            ) : Password ? (
              <i className="password_icon">
                {" "}
                <span onClick={() => setPassword(!showPassword)}>
                  {!showPassword ? (
                    <AiOutlineEye style={{ fontSize: "20px" }} />
                  ) : (
                    <AiOutlineEyeInvisible style={{ fontSize: "20px" }} />
                  )}
                </span>
              </i>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InputBox;

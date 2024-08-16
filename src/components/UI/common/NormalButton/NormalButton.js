import React, { Component } from "react";
// styles
import "./normalButton.scss";
import AddBtnLogo from "assets/icons/addBtn.svg";
export class NormalButton extends Component {
  render() {
    const {
      className = "",
      label = "",
      onClick,
      id,
      orderBtn,
      primaryBtn,
      approveBtn,
      denyBtn,
      verifyBtn,
      verifiedBtn,
      undoBtn,
      rejectBtn,
      correctionBtn,
      printBtn,
      loginOutline,
      type = "submit",
      disabled = false,
      cancelBtn = false,
      addBtn = false,
      isLoading = false, // Add isLoading prop for button loader
      innerref = null,
    } = this.props;

    return (
      <div>
        <button
          ref={innerref}
          id={id}
          type={type}
          className={`cursor-pointer ${className}`}
          onClick={onClick}
          disabled={disabled || isLoading}
        >
          {addBtn && <img src={AddBtnLogo} className="me-2" />}
          {isLoading ? (
            <span className="btn-loader  ">
              {" "}
              <>
                <span className="m-3">Loading</span>{" "}
              </>
            </span>
          ) : (
            <>{label}</>
          )}
        </button>
      </div>
    );
  }
}

export default NormalButton;

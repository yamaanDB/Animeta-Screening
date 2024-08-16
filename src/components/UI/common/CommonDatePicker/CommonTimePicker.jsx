import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { FaBusinessTime } from "react-icons/fa";
import BsClock from "assets/icons/clockIcon.svg";
import { numberInput } from "helpers/validation";
import { ExpandLess } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TimePicker({
  type = "text",
  name,
  placeholder,
  className = "",
  suffixText = "",
  prefixText = "",
  disabled = false,
  width = "100%",
  onTimeChange,
  onTimePeriod,
  getHour,
  getPeriod,
  mouse,
}) {
  const [selectedHour, setSelectedHour] = useState("hh");
  const [selectedMinute, setSelectedMinute] = useState("mm");
  const [minute, setMinute] = useState("mm");
  const [hour, setHour] = useState("hh");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const [ShowTimer, setShowTimer] = useState(false);
  const [ShowTimerApply, setShowTimerApply] = useState(false);
  const [Period, setPeriod] = useState(false);
  const [selectedHourIndex, setSelectedHourIndex] = useState(null); // New state variable
  const [selectedMinsIndex, setSelectedMinsIndex] = useState(null); // New state variable
  const [state, setState] = useState(false);

  useEffect(() => {
    setShowTimer(false);
    setPeriod(false);
  }, [state]);
  const wrapperRef = useRef(null);
  const periodRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        //setState((open) => false);
        setState((open) => !open);
      }
      if (periodRef.current && !periodRef.current.contains(event.target)) {
        //setState((open) => false);
        setState((open) => !open);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      // eslint-disable-next-line no-restricted-globals
      window.removeEventListener("click", removeEventListener, true);
    };
  }, []);

  const handleHourClick = (hour, index) => {
    setHour(hour);
    setShowTimerApply(true);
    setSelectedHourIndex(index); // Update selected hour index
  };

  const handleMinuteClick = (minute, index) => {
    setShowTimerApply(true);
    setSelectedMinsIndex(index);
    setMinute(minute);
  };

  const handlePeriodChange = (selectedOption) => {
    setShowTimer(false);
    setSelectedPeriod(selectedOption);
    setPeriod(false);
  };
  const handleTimeApply = () => {
    setShowTimerApply(false);
    setShowTimer(false);
    setSelectedMinute(minute);
    setSelectedHour(hour);
  };
  const options = [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ];

  const hourOptions = Array.from({ length: 12 }, (_, i) => {
    const hour = (i + 1).toString().padStart(2, "0");
    return { value: hour, label: hour };
  });
  const MinutesOptions = Array.from({ length: 60 }, (_, i) => {
    const minute = i.toString().padStart(2, "0");
    return { value: minute, label: minute };
  });

  useEffect(() => {
    const selectedTime = `${selectedHour}:${selectedMinute}`;
    onTimeChange(selectedTime);
    onTimePeriod(selectedPeriod);
  }, [selectedHour, selectedMinute, selectedPeriod]);

  useEffect(() => {
    if (getHour) {
      const [hourValue, minutesValue] = getHour.split(":");
      setSelectedHour(hourValue);
      setSelectedMinute(minutesValue);
      setHour(hourValue);
      setMinute(minutesValue);
    }
  }, [getHour]);

  useEffect(() => {
    setSelectedPeriod(getPeriod);
  }, [getPeriod]);

  return (
    <div>
      <div className="input-group">
        {prefixText && (
          <span className="input-group-text B3-Medium" id={`addon-${name}`}>
            {prefixText}
          </span>
        )}
        <input
          type={type}
          style={{ width: `${width}` }}
          className={`${className} prefixInputs ${disabled ? "disabled" : ""}`}
          placeholder={placeholder}
          value={`${selectedHour}:${selectedMinute}`}
          readOnly
          disabled={disabled}
          onKeyDown={numberInput}
        />
        {suffixText && (
          <span
            className="input-group-text B3-Medium fw-bold p-0"
            id={`addon-${name}`}
          >
            <div onClick={() => setPeriod(true)}>
              <span className="mx-1 ms-2">
                <span className="me-2">
                  {selectedPeriod !== undefined ? selectedPeriod : "AM"}
                </span>
                {Period ? (
                  <ExpandLess className="mb-1" />
                ) : (
                  <ExpandMoreIcon className="mb-1" />
                )}
              </span>
            </div>
          </span>
        )}

        {suffixText && (
          <span
            className="input-group-textfield  fw-bold cursor-pointer  "
            id={`addon-${name}`}
            onClick={() => setShowTimer(true)}
          >
            <img src={BsClock} />
          </span>
        )}
      </div>
      {Period && (
        <div
          ref={periodRef}
          className=" d-flex justify-content-end  mt-2 position-relative"
        >
          <div className="period-option-tab ">
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePeriodChange(item.value)}
                className={`d-block cursor-pointer Period-option-value`}
              >
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {ShowTimer && (
        <div
          ref={wrapperRef}
          className=" d-flex justify-content-end  mt-2 position-relative"
        >
          <div className="hour-header">hh : mm</div>
          <div className="hours-option-tab ">
            {hourOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleHourClick(item.value, index)}
                className={`d-block cursor-pointer hours-option-value ${
                  selectedHourIndex === index ? "selected-hour" : ""
                }`} // Apply selected-hour class based on the index
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="minutes-option-tab">
            {MinutesOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleMinuteClick(item.value, index)}
                className={`d-block cursor-pointer minutes-option-value ${
                  selectedMinsIndex === index ? "selected-hour" : ""
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div
            className={`hour-footer ${
              ShowTimerApply ? "applyText-color fw-bold" : ""
            } `}
            onClick={handleTimeApply}
          >
            Apply
          </div>
        </div>
      )}
    </div>
  );
}

export default TimePicker;

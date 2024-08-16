import React from "react";
// styles
import styles from "./styles.module.scss";
import Line from "../../../../assets/images/verticalLine.svg";
//import InputGroup from "components/UI/common/InputGruops";
import InputBox from "components/UI/common/InputBox/InputBox";
import { BsPlusCircle, BsTrash } from "react-icons/bs";
import { ReactComponent as RedDeleteIcon } from "assets/icons/redDeleteIcon.svg";
import { numberInput, numberInputMax } from "helpers/validation";
import FormErrorMessage from "../ErrorMessage";

const EarlyChargersTable = ({
  Hearder,
  tabelHeader,
  chargeHrs,
  errors,
  otherCharges = false,
  register,
  countList = [],
  setCountList,
  otherChargersList = [],
  setOtherChargersList,
  addEmptyItem = () => {},
  deleteItem = () => {},
  typename = "",
  saveDraft,
  preview,
}) => {
  return (
    <div className={styles.ChargesForm}>
      {!otherCharges ? (
        <div className="new-section px-2">
          <div className={styles.basicForm}>
            <div className={`row `}>
              <div className={` p-0 ${styles.earlyCheckInChargesBody}`}>
                <label className={styles.labelHeader}>{Hearder}</label>
                <label className={styles.heading}>
                  <span className="col text-left">{tabelHeader}</span>
                  <span className={styles.headerline}> </span>
                  <span className="col text-left ">% of rent</span>
                </label>
                <div>
                  <div className=""></div>
                  {countList.map((item, index, array) => {
                    return (
                      <div
                        key={index}
                        className={
                          index === array.length - 1
                            ? styles.earlyCheckLastItem
                            : index % 2 === 0
                            ? styles.earlyCheckEvenrow
                            : styles.earlyCheckOddrow
                        }
                      >
                        <span className={`${styles.offsetStyle} col `}>
                          {" "}
                          {item.offset}
                        </span>
                        <span className={styles.headerlinebody}> </span>
                        <div className="col text-left">
                          <InputBox
                            onKeyDown={numberInputMax}
                            type="number"
                            disabled={preview}
                            ratefiled={true}
                            className={styles.styleInputBox}
                            name={`${item.offset}_ ${item.unit}_${index}_${
                              item.typename ? item.typename : item._id
                            }  `}
                            value={item?.percentageOfRate}
                            placeholder="Enter no."
                            // onChange={(e) => console.log(e)}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              const updatedList = [...countList];
                              updatedList[index].percentageOfRate = newValue;
                              setCountList = updatedList;
                            }}
                            register={register(
                              `${item.offset}_ ${item.unit}_${index}_${
                                item.typename ? item.typename : item._id
                              }  `,
                              {
                                required:
                                  (item.percentageOfRate == "" ||
                                    item.percentageOfRate == null) &&
                                  !saveDraft
                                    ? true
                                    : false,
                                pattern: /^[0-9\b]+$/,
                                validate: {
                                  max100: (value) => {
                                    if (parseInt(value) > 100) {
                                      return "Maximum value is 100";
                                    }
                                    return true;
                                  },
                                },
                              }
                            )}
                          />
                          <FormErrorMessage
                            error={
                              errors[
                                `${item.offset}_ ${item.unit}_${index}_${
                                  item.typename ? item.typename : item._id
                                }  `
                              ]
                            } // Corrected
                            messages={{
                              required: "% of rent is required",
                              pattern: "% of rent is invalid",
                              max100: "Maximum % of rent is 100",
                            }}
                          />
                          {/* {index !== 0 && (
                          <span>
                            <BsTrash className={`fs-20 fw-500 text-danger`} />
                          </span>
                        )} */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="new-section ">
          <div className={styles.basicForm}>
            <div className={`row `}>
              <div className={` p-0 ${styles.earlyCheckInChargesBody}`}>
                <label className={styles.otherChargesheading}>
                  <span className="col text-left">{tabelHeader}</span>
                  <span className={styles.otherheaderline}> </span>
                  <span className="col text-left">Amount (₹)</span>
                </label>
                <div>
                  <div className=""></div>
                  {otherChargersList.map((item, index, array) => (
                    <div
                      key={item.id ? item.id : item._id}
                      className={styles.otherChargesEvenrow}
                    >
                      <span
                        className={`${
                          index === array.length - 1
                            ? undefined
                            : styles.tableBorder
                        } fw-bold ps-3  w-50 mb-0 fs-13 position-relative `}
                      >
                        <InputBox
                          type="text"
                          disabled={preview}
                          amountfiled={true}
                          name={`label_${item.id ? item.id : item._id}`}
                          placeholder="Enter charge type name"
                          errors={errors}
                          className={styles.chargeTypeName}
                          readOnly={index > 1 ? false : true}
                          value={item.label}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            const updatedList = [...otherChargersList];
                            updatedList[index].label = newValue;
                            setOtherChargersList(updatedList);
                          }}
                          register={register(
                            `label_${item.id ? item.id : item._id}`,
                            {
                              required:
                                (item.label == "" || item.label == null) &&
                                !saveDraft
                                  ? true
                                  : false,
                              pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                            }
                          )}
                        />

                        <div className={styles.errorMessage}>
                          <FormErrorMessage
                            error={
                              errors[`label_${item.id ? item.id : item._id}`]
                            }
                            messages={{
                              pattern: "Charge Type Name is invalid",
                              required: "Charge Type Name is required",
                            }}
                          />
                        </div>
                      </span>
                      <span className={styles.otherheaderlinebody}> </span>
                      <div
                        className={`${
                          index === array.length - 1
                            ? undefined
                            : styles.tableBorder
                        } d-flex fw-bold ps-3  w-50 mb-0 fs-13  justify-content-start  position-relative `}
                      >
                        <div>
                          <InputBox
                            type="number"
                            onKeyDown={numberInput}
                            amountfiled={true}
                            disabled={preview}
                            name={`amount_${item.id ? item.id : item._id}`}
                            placeholder="Enter amount"
                            className={styles.amountTypeName}
                            errors={errors}
                            value={item.value}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              const updatedList = [...otherChargersList];
                              updatedList[index].value = newValue;
                              setOtherChargersList(updatedList);
                            }}
                            register={register(
                              `amount_${item.id ? item.id : item._id}`,
                              {
                                required:
                                  (item.value == "" || item.value == null) &&
                                  !saveDraft
                                    ? true
                                    : false,
                                pattern: /^(0|[1-9]\d*)$/,
                              }
                            )}
                          />
                          <div className={styles.errorMessage}>
                            <FormErrorMessage
                              error={
                                errors[`amount_${item.id ? item.id : item._id}`]
                              }
                              messages={{
                                pattern: "Amount is invalid",
                                required: "Amount is required",
                              }}
                            />
                          </div>
                        </div>
                        {index != 0 && !preview && (
                          <span className="d-flex  ms-5 pe-2 align-items-center justify-content-end ">
                            {index > 1 && (
                              <RedDeleteIcon
                                onClick={() => deleteItem(index)}
                                className={`fs-20 ms-2 fw-500 cursor-pointer ${styles.deleteColor}`}
                              />
                            )}
                            {index === otherChargersList.length - 1 && (
                              <>
                                <img src={Line} alt="line" className="mx-2" />
                                <BsPlusCircle
                                  onClick={() =>
                                    index >= 1 && addEmptyItem(index)
                                  }
                                  className={`fs-20 fw-500 cursor-pointer ${styles.addChargerIcon}`}
                                />
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {/* <span className={styles.tableBorder}></span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarlyChargersTable;

// useEffect(() => {
//   const number = parseInt(chargeHrs, 10);
//   if (!isNaN(number) && number > 0) {
//     const counts = [];
//     let currentCount = 1;
//     const interval = setInterval(() => {
//       if (currentCount <= number) {
//         counts.unshift({ count: currentCount, value: "" });
//         setCountList([...counts]);
//         currentCount++;
//       } else {
//         clearInterval(interval);
//         // while (counts.length < 6) {
//         //   counts.push("");
//         // }
//         setCountList([...counts]);
//       }
//     }, 10);
//     return () => clearInterval(interval);
//   } else {
//     const defaultCounts = Array(1).fill("");
//     setCountList(defaultCounts);
//   }
// }, [chargeHrs]);

import moment from "moment";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?& ]{8,}$/s;

const Name_Regex = /^[a-zA-Z ]+$/;

const pinCodeRegex = /^\d{6}$/;

export const spaceValidation = (value) =>
  value ? value.toString().trim() !== "" : true;

export const validatePIN = (pin) => pinCodeRegex.test(pin);

export const nameValidation = (value) =>
  value ? Name_Regex.test(value) : true;

export const passwordValidation = (value) =>
  value && PASSWORD_REGEX.test(value);

export const ignoreNegativeValue = (value) => value && value > 0;

export const onlyNumbers = (value) => (value ? /^[0-9]+$/.test(value) : true);

export const numberLetterValidation = (value) =>
  value ? /^[0-9a-zA-Z]+$/.test(value) : true;

export const maxLengthValidation = (len) => (value) =>
  value ? String(value)?.length <= len : true;

export const minLengthValidation = (len) => (value) =>
  value ? String(value)?.length >= len : true;

export const experienceValidate = (
  data,
  experienceYear,
  setError,
  errorName,
  errorType,
  shouldFocus
) => {
  if (data?.length > 0) {
    let momentDates = data
      ?.map((x) => x && moment(x?.passingYear))
      .filter(Boolean);
    const minDate = moment.min(momentDates);
    const diffYear = moment().get("year") - moment(minDate).get("year");

    if (+experienceYear && diffYear < +experienceYear) {
      if (setError && errorName && errorType) {
        setError(errorName, { type: errorType, shouldFocus });
        return false;
      }
    }
  }
  return true;
};

export const numberInput = (event) => {
  // Check if the pressed key is the up arrow (38) or down arrow (40)
  if (event.which === 107 || event.which === 187 || event.which === 38 || event.which === 40 || event.which === 45 || event.which === 69 || event.which === 189 || event.which === 173 || event.which === 110 || event.which === 109 || event.which === 190 || event.which === 46) {
    event.preventDefault();
  }
};

export const numberInputMax = (event) => {
  if (event.which === 107 || event.which === 187 || event.which === 38 || event.which === 40 || event.which === 45 || event.which === 69 || event.which === 189 || event.which === 173 || event.which === 110 || event.which === 109 || event.which === 190 || event.which === 46) {
    event.preventDefault();
  }
  // if (event.which === 69 || event.which == 189 || event.which === 38 || event.which === 40 ) {
  //   event.preventDefault();
  // }
  // Check if the pressed key is the up arrow (38) or down arrow (40)
  const currentValue = event.target.value;
  if (currentValue.length >= 3) {
    const newValue = currentValue.slice(0, 2);
    event.target.value = newValue;
  }
};

// export const numberInput = event => {
//     if (
//         (event?.keyCode === 8) ||
//         (event?.keyCode >= 48 && event?.keyCode <= 57) ||
//         (event?.keyCode >= 37 && event?.keyCode <= 49)
//     ) {
//         return true;
//     } else {
//         event.preventDefault();
//     }
// }

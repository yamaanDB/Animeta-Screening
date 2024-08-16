import moment from "moment";
import axios from "axios";
import CryptoJS from "crypto-js";

export const history = require("history").createBrowserHistory({});

let routerCache = {},
  timer;

export const getMonth = (month) => {
  switch (month) {
    case "Jan":
      return 0;
    case "Feb":
      return 1;
    case "Mar":
      return 2;
    case "Apr":
      return 3;
    case "May":
      return 4;
    case "Jun":
      return 5;
    case "Jul":
      return 6;
    case "Aug":
      return 7;
    case "Sep":
      return 8;
    case "Oct":
      return 9;
    case "Nov":
      return 10;
    case "Dec":
      return 11;
    default:
      return 1;
  }
};

export const dateDiff = (orderStartDate, orderEndDate = false) => {
  let finalValue;

  let currentDate = moment([
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]);

  let startDate = moment([
    String(orderStartDate).split(",")[0].split(" ")[2],
    getMonth(String(orderStartDate).split(",")[0].split(" ")[1]),
    String(orderStartDate).split("th")[0],
  ]);

  let endDate = moment([
    String(orderEndDate).split(",")[0].split(" ")[2],
    getMonth(String(orderEndDate).split(",")[0].split(" ")[1]),
    String(orderEndDate).split("th")[0],
  ]);

  if (orderEndDate) {
    finalValue = endDate.diff(startDate, "days");
  } else {
    finalValue = currentDate.diff(startDate, "days");
  }

  return finalValue > 1 ? `${finalValue} days` : `${finalValue} day`;
};

export const isGeneralImage = (data) => {
  let urls = [];
  data.items.map((list) => {
    list.imgUrls.map((url) => {
      urls.push(url);
    });
  });
  let isGeneral = urls.some((list) => {
    return String(list).includes("General+New");
  });
  return isGeneral ? "Yes" : "No";
};

export const timeConvert = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
};

export const debounce =
  (func, setLoading, timeout = 800) =>
    (...args) => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        typeof setLoading === "function" && setLoading(true);
        await func(...args);
        typeof setLoading === "function" && setLoading(false);
      }, [timeout]);
    };
export const debounceFunction = (fn, delay) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
export const downloadFile = ({ url }) => {
  if (!url) return;

  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.click();
};

export function capitalizeLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getFirstLetter = (value) => {
  if (!value) return;
  if (Array.isArray(value)) {
    const filteredValue = value.filter(Boolean);
    let letter = "",
      lastIndex = value?.length - 1;

    if (filteredValue?.length <= 0) return;
    if (filteredValue[0]) letter += filteredValue[0]?.charAt(0)?.toUpperCase();
    if (lastIndex && filteredValue[lastIndex])
      letter += filteredValue[lastIndex]?.charAt(0)?.toUpperCase();

    return letter;
  }
  return value?.charAt(0).toUpperCase();
};

export const Encrypt = (plainText) => {
  if (!plainText) {
    return plainText;
  }
  try {
    var ciphertext = CryptoJS.AES.encrypt(
      plainText,
      "39ib92v7db292bbwqddhvsi73tw048dbi3h8hf4b9cib49"
    ).toString();

    return ciphertext;
  } catch (e) {
    console.log("Error in encryption", e);
    return plainText;
  }
};

export const getGoogleAdress = async ({ lat, lng }) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_API_KEY || ""}`
    );
    return response;
  } catch (error) {
    console.log("error >> ", error);
    return false;
  }
};

export const Hours = [
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];

export const Minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];

export const Types = ["AM", "PM"];

export const findHour = (start, end) => {
  if (start && end) {
    var startTimeString = start;
    var endTimeString = end;

    // Convert time strings to Date objects (assuming today's date)
    var startDate = new Date("1970-01-01T" + startTimeString + ":00");
    var endDate = new Date("1970-01-01T" + endTimeString + ":00");

    // Calculate the time difference in milliseconds
    var timeDifference = endDate - startDate;

    // Convert time difference to minutes
    var differenceInMinutes = timeDifference / (1000 * 60);
    return differenceInMinutes;
  }
};

// eslint-disable-next-line no-undef
//export const decodeJWT = (token) => (token ? decode(token) : token);

export const numberInput = (event) => {
  if (!event) return;
  if (
    [8, 46, 13].includes(Number(event?.keyCode)) ||
    (event?.keyCode >= 48 && event?.keyCode <= 57) ||
    (event?.keyCode >= 96 && event?.keyCode <= 105) ||
    (event?.keyCode >= 37 && event?.keyCode <= 40)
  ) {
    return true;
  } else {
    event.preventDefault();
  }
};

const hexToRgba = (hex = "", alpha = 0) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const isRepeated = (arr, key) => {
  if (arr?.length) {
    return !arr.some((item, index) => arr.slice(0, index).some((prevItem) => prevItem[key] === item[key]));
  }
  return true;
}

export const getCommonSelectAll = (data, requiredStays, defaultObj = {}) => {
  const output = defaultObj;
  if (data && Object.entries(data)?.length)
    Object.entries(data).map(([serviceKey, serviceValue]) => {
      if (serviceKey) {
        let serviceOutput = {};
        Object.entries(serviceValue)?.map(([key, value]) => {
          serviceOutput[key] = requiredStays.every(stay => value?.[stay])
        })
        output[serviceKey] = serviceOutput
      }
    })

  console.log("output", output)
}

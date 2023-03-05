export const formatNumber = (number: number | null | undefined) => {
  return Number(number || 0)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

/**
 * use when you need to separate number with ','
 * @param number number you need to separate
 * @param decimalLength number of gì vậy ?
 */
export const formatNumberStr = (
  number: number | null | undefined,
  decimalLength = 3
) => {
  if (number === 0) return "0";
  if (!number || isNaN(number)) return "";
  if (number.toString().includes(".")) {
    const numberParseArray = number.toString().split(".");
    const evenSection = numberParseArray[0];
    const decimalSection = numberParseArray[1];
    decimalLength =
      decimalLength > decimalSection.length
        ? decimalSection.length
        : decimalLength;
    return `${evenSection.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    )},${decimalSection.substring(0, decimalLength)}`;
  }
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const formatNumberStrRounded = (
  number: number | null | undefined,
  decimalLength = 3
) => {
  if (number === 0) return "0";
  if (!number || isNaN(number)) return "";
  if (number.toString().includes(".")) {
    const numberParseArray = number.toFixed(3).toString().split(".");
    const evenSection = numberParseArray[0];
    const decimalSection = numberParseArray[1];
    decimalLength =
      decimalLength > decimalSection.length
        ? decimalSection.length
        : decimalLength;
    return `${evenSection.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    )},${decimalSection.substring(0, decimalLength)}`;
  }
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const numberParser = (value: string | undefined, decimalLength = 3) => {
  if (value?.toString().includes(",")) {
    const numberParseArray = value.split(",");
    const evenSection = numberParseArray[0];
    const decimalSection = numberParseArray[1];
    decimalLength =
      decimalLength > decimalSection.length
        ? decimalSection.length
        : decimalLength;
    return Number(
      `${evenSection.replaceAll(".", "")}.${decimalSection.substring(
        0,
        decimalLength
      )}`
    );
  }
  return Number(value?.toString().replaceAll(".", "") || undefined);
};
export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const toNonAccentVietnamese = (str: string) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
};

export const mapCamelToSnake = (value: string) => {
  return value.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const randomUniqueID = () => {
  return Math.random().toString(16).slice(2) + "_" + new Date().getTime();
};

export const capitalizeFirstLetter = (value: string | undefined | null) => {
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getTextFromHTML = (html: string) => {
  const divContainer = document.createElement("div");
  divContainer.innerHTML = html;
  return (divContainer.textContent || divContainer.innerText || "").trim();
};

export const showDot = (text: string, maxLength: number) => {
  return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
};

export const stringToNumber = (s: string) => {
  if (isNaN(+s)) {
    return 0;
  }
  return Number(s);
};

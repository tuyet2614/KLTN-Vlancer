import { numberParser } from './string';

const EMAIL_REGEX = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const validateEmail = (email: string) => {
  if (!email) return false;

  const emailParts = email.split('@');

  if (emailParts.length !== 2) return false;

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64) return false;
  else if (address.length > 255) return false;

  const domainParts = address.split('.');
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  if (!EMAIL_REGEX.test(email)) return false;

  return true;
};

export const validatePhoneNumber = (str: string) => {
  return (
    (str.length === 10 && /(0)(3|5|7|8|9)+([0-9]{8})\b/.test(str)) ||
    (str.length === 11 && /(84)(3|5|7|8|9)+([0-9]{8})\b/.test(str)) ||
    (str.length === 12 && /(\+84)(3|5|7|8|9)+([0-9]{8})\b/.test(str))
  );
};

export const validatePassword = (str: string) => {
  return str?.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]).{7,31})\S$/);
};

export const validateMaxNumber = (number: number | null | undefined, maxValue: number) => {
  return number && number < maxValue;
};

export const validateMaxInteger = (number: number | null | undefined) => {
  return number && number < Number.MAX_SAFE_INTEGER;
};
export const isNumeric = (num: any) => {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return (num && !isNaN(num as unknown as number)) || !isNaN(numberParser(num));
  }
};
export const validateInventory = (value: string) => {
  const upperCaseValue = value.toUpperCase();
  const twoLetterFirst = upperCaseValue.substring(0, 2);
  if (twoLetterFirst !== 'KK') {
    return true;
  } else {
    if (upperCaseValue.split('KK')[1].length !== 6) {
      return true;
    }
  }
  return false;
};

export const MAX_VALUE_NUMBER = 9_999_999_999.999;
export const MAX_LENGTH_NUMBER_AFTER_FORMAT = 17;
export const MAX_NUMBER_QUANTITY = 12;
export const MAX_TIME_WORK = 43_200;
export const MAX_DISTANCE_WORK = 50_000

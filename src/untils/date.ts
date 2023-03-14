import { DateFormat } from '../configs/common';
import dayjs from 'dayjs';

/**
 * check expiry
 * return true if expired
 * @param date number in seconds
 */
export const isExpired = (date: number) => {
  return date < dayjs().unix();
};

export const concatDateTime = (startDate: Date, startTime: Date, endDate: Date, endTime: Date) => {
  const startD = dayjs(startDate).format(DateFormat.DEFAULT);
  const startT = dayjs(startTime).format(DateFormat.TIME_NO_SECOND);
  const endD = dayjs(endDate).format(DateFormat.DEFAULT);
  const endT = dayjs(endTime).format(DateFormat.TIME_NO_SECOND);
  const startAt = dayjs(`${startD} ${startT}`, DateFormat.DATE_TIME_NO_SECOND).valueOf();
  const endAt = dayjs(`${endD} ${endT}`, DateFormat.DATE_TIME_NO_SECOND).valueOf();

  return { startAt, endAt };
};

export const convertTimeUTCToLocalTime = (date: string | number) => {
  return dayjs(date).format(DateFormat.DATE_TIME_NO_SECOND);
};

export const getCurrentTimeZone = () => {
  const tzOffset = new Date().getTimezoneOffset();
  if (tzOffset && tzOffset > 0) {
    return Number(
      Math.floor(tzOffset / 60)
        .toString()
        .padStart(2, '0'),
    );
  } else {
    return Number(
      Math.floor(tzOffset / -60)
        .toString()
        .padStart(2, '0'),
    );
  }
};

/**
 * Function get rang from start of and end of UNIT by the time passed
 * @param day
 * @param unit
 */
export const getRangeOf = (day: dayjs.Dayjs, unit: dayjs.OpUnitType = 'day') =>{
  return {
    startOf: dayjs(day).startOf(unit).valueOf(),
    endOf: dayjs(day).endOf(unit).valueOf(),
  }
}

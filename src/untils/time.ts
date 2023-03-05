import dayjs from "dayjs";

export function getBasicTimeFromTimeStamp(time?: Date): any {
  return dayjs(time).format("DD/MM/YYYY - HH:mm:ss");
}

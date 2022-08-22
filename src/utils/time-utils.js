export const timeStamp2Date = (str) => {
  const dateTime = str.split("T");
  const time = dateTime[1].split(".");
  return `${dateTime[0]} (${time[0]})`;
};

export const timeStamp2Date = (str) => {
  if (!str) return undefined;
  const dateTime = str.split("T");
  const time = dateTime[1].split(".");
  return `${dateTime[0]} (${time[0]})`;
};

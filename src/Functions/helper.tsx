
const getDay = (currentDateTime: number) => {
  const days = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const date = new Date(currentDateTime * 1000);
  return days[date.getDay()];
};


const getDate = (currentDateTime: number) => {
  const date = new Date(currentDateTime * 1000);
  return date.toLocaleDateString();
};


const getTime = (dateTime: number) => {
  const currentSunrise = new Date(dateTime * 1000);
  return currentSunrise.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const helperFunction = { getDay, getDate, getTime };

export default helperFunction;

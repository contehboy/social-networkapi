const dateformat = (date) => {
  const inputDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var year = inputDate.getFullYear();
  var month = monthNames[inputDate.getMonth()];
  var day = inputDate.getDate();
  var hour = inputDate.getHours();
  var minute = inputDate.getMinutes();
  var ampm = hour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hour > 12) {
    hour -= 12;
  }

  const formattedDate = `${month} ${day} ${year} at ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${ampm}`;
  return formattedDate;
};
module.exports = dateformat;

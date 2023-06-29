const formatDate = (date) => {
  const newDate = new Date(date * 1000);

  const day = newDate.getDate(date);
  const month = addLeadingZero(newDate.getMonth(date) + 1);
  const year = newDate.getFullYear(date);
  const hours = addLeadingZero(newDate.getHours(date));
  const minutes = addLeadingZero(newDate.getMinutes(date));
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const addLeadingZero = (num) => {
  return (num < 10) ? "0" + num : num;
}

export default formatDate;
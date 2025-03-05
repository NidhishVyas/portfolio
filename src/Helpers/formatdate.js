const monthMap = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  
  const formatDate = (input) => {
    const [shortMonth, year] = input.split(" ");
  
    const fullMonth = monthMap[shortMonth] || shortMonth;
  
    const shortDate = `${shortMonth} '${year.slice(-2)}`;
  
    const fullDate = `${fullMonth} ${year}`;
  
    return { fullDate, shortDate };
  };
  
  export default formatDate;
  
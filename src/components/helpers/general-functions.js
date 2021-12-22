// Development api url
export const devApiUrl = "https://facethechildren.org/dev-app/rest";

// Production api url
export const prodApiUrl = "https://facethechildren.org/app/rest";

// Root domain url
export const rootUrl = "https://facethechildren.org";

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// Convert date from stripe to date string
export function setDate(val) {
  var d = new Date(val * 1000);
  var n = d.toLocaleDateString();
  return n;
}

// Date formatting
export const formatDate = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  // const day = d.getDay();
  const months = [
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
  // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // return `${days[day]}, ${months[month]} ${date} ${year}`;
  // return `${days[day]}, ${months[month]} ${date}`;
  return `${months[month]} ${date} ${year}`;
  // return `${year} ${months[month]} ${date} `;
};

export const getPercentage = (item, subs) => {
  let amount = 0;
  const metadata = { ...item.metadata, pid: item.id };

  for (var key of Object.keys(metadata)) {
    if (key.slice(0, 6) === "amount") {
      let data = metadata[key].split(".");
      // let startDate = data[0];
      // let endDate = data[1];

      const amountStop = data[2].split("_");

      if (amountStop.length < 2) {
        let money = data[2];

        amount += parseInt(money);
        // amount += parseInt(metadata[key].slice(22, 27));
      }
    }
  }
  subs.map((item) => {
    for (var key of Object.keys(metadata)) {
      if (item.plan.product === metadata[key]) {
        amount += item.plan.amount;
      }
    }
    return amount;
  });
  const val = Math.ceil((amount / 100 / 200) * 100);
  // console.log(amount);
  return val;
};

javascript
function minDate(dates) {
  if (dates.length === 0) return null;

  return dates.reduce((earliest, current) => {
    return current < earliest ? current : earliest;
  });
}

// Examples
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // "2022/12/31"
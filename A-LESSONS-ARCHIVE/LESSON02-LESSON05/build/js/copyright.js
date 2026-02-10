// my solution
// const year = document.getElementById("year")!
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", `${thisYear}`)
// year.textContent = `${thisYear}`
//  Dave's solution
//  1st variation
// const year: HTMLElement = document.getElementById("year")!
// const thisYear: string = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute("datetime", thisYear)
//   year.textContent = thisYear
// }
//  2nd variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
export {};
//# sourceMappingURL=copyright.js.map
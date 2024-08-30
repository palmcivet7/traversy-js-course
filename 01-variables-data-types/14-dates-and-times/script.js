let d;

d = new Date();

d = d.toString();

d = new Date(2024, 0, 1); // Jan 01 2024
d = new Date(2024, 1, 1); // Feb 01 2024

d = new Date(2024, 1, 1, 3, 30); // Feb 01 2024 03:30:00

d = new Date('2021-07-10'); // july 10 2021
d = new Date('2021-01-01T12:30:00'); // jan 01 2021 12:30:00
d = new Date('07/10/2021 12:30:00'); // july 10 2021 12:30:00

d = Date.now(); // 1724958995120 timestamp
d = new Date('07-10-2022');
d = d.getTime(); // 1657407600000 exact timestamp for date we passed

d = Math.floor(Date.now() / 1000); // timestamp in seconds

console.log(d); // object
console.log(typeof d); // object

let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf(); // timestamp

x = d.getFullYear(); // 2024
x = d.getMonth(); // 7 (Aug) (jan == 0)

x = d.getDate(); // day of the month, 29
x = d.getDay(); // day of the week, 4
x = d.getHours();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2024-8-29

x = Intl.DateTimeFormat('en-US').format(d); // 8/29/2024
x = Intl.DateTimeFormat('en-GB').format(d); // 29/08/2024
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // August
x = d.toLocaleString('default', { month: 'short' }); // Aug

x = d.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_Angeles',
});

console.log(x);

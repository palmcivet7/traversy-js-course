const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials.__proto__); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// socials.forEach(function (item) {
//   console.log(item);
// });
// // alternative syntax:
// socials.forEach((item) => console.log(item));

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item)); // logs object
socialObjs.forEach((item) => console.log(item.url)); // logs url

const library = [
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

const { title: firstBook } = library[0];
console.log(firstBook);

const str = JSON.stringify(library);
console.log(str);

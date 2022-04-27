let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function loopThruArray() {
  myLibrary.forEach((book) => console.log(book));
}

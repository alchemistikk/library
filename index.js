const wrapper = document.querySelector(".wrapper");

let myLibrary = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitgerald",
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
  },
];

function Book() {
  // the constructor...
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach(function (book) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    wrapper.appendChild(div);
    div.appendChild(p);
    p.textContent = `${book.title} ${book.author}`;
  });
}

displayBooks();

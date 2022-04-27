const wrapper = document.querySelector(".wrapper");
const button = document.querySelector(".button");

let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
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

addBookToLibrary("The Great Gatsby", "F. Scott Fizgerald");
addBookToLibrary("The Sun Also Rises", "Ernest Hemingway");
addBookToLibrary("The Three-Body Problem", "Liu Cixin");

displayBooks();

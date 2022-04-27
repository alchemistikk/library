const wrapper = document.querySelector(".wrapper");

let myLibrary = [
  {
    title: "The Great Gatsby",
  },
];

function Book() {
  // the constructor...
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const div = document.createElement("div");
  const p = document.createElement("p");

  myLibrary.forEach(function (book) {
    wrapper.appendChild(div);
    div.appendChild(p);
    p.textContent = book.title;
  });
}

displayBooks();

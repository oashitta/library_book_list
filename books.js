let myLibrary = [];

// write a constructor for making a Book object
function Book(title, author, noOfPages, read) {
  (this.title = title),
    (this.author = author),
    (this.noOfPages = noOfPages),
    (this.read = read);
  // (this.info = function () {
  //   if (this.read === false) {
  //     return `${title} by ${author}, ${noOfPages}, not read yet`;
  //   } else {
  //     return `${title} by ${author}, ${noOfPages}, read`;
  //   }
  // });
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}

// let book1 = new Book("The Hobbit", "I. Dunno", 456, false);
// console.log(book1.info());
// let book2 = new Book("The Mystery", "I. Read It", 236, true);
// console.log(book2.info());

function displayBook() {
  let bookList = document.querySelector("#bookList");
  bookList.innerHTML = "";

  let index = 0;
  for (let book of myLibrary) {
    // console.log(book);
    let bookItem = document.createElement("tr");
    bookItem.innerHTML = `<td>${book.title}</td> 
    <td>${book.author}</td> 
    <td>${book.noOfPages}</td> 
    <td>${book.read ? "Read" : "Yet to be Read"}</td> 
    <td><button onClick="removeBook(${index})"> Delete </button></td>
    <td><button onClick="toggleRead(${index})"> Toggle Read </button></td>`;
    bookList.appendChild(bookItem);
    index++;
  }
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let noOfPages = document.querySelector("#no-of-pages").value;
  let read = document.querySelector("#read").checked;
  // creating a new object
  let newBook = new Book(title, author, noOfPages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  displayBook();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

let newBookBtn = document.querySelector("#add-new-book-button");
newBookBtn.addEventListener("click", function () {
  // alert("i am working");
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "flex";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("submitted");
    addBookToLibrary();
  });

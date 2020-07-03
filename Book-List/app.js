class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {}

  addBookList(book) {
    const row = document.createElement("tr");
    const bookList = document.getElementById("book-list");
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
    bookList.appendChild(row);
    console.log(row);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  showAlerts(message, className) {
    const div = document.createElement("div");

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const form = document.getElementById("book-form");
    const container = form.parentNode;
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentNode.parentNode.remove();
    }
  }
}

document.getElementById("book-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlerts("Fields Can't be Empty", "error");
  } else {
    const book = new Book(title, author, isbn);
    ui.addBookList(book);
    ui.showAlerts("Added Successfully", "success");
  }

  ui.clearFields();
  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlerts("Deleted Successfully", "success");
  e.preventDefault();
});

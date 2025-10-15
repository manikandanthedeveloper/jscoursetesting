let books = [];

function addBook(event) {
	event.preventDefault();

	const bookName = document.getElementById("bookName").value;
	const authorName = document.getElementById("authorName").value;
	const bookDescription = document.getElementById("bookDescription").value;
	const pagesNumber = document.getElementById("pagesNumber").value;

	if (
		bookName === "" ||
		authorName === "" ||
		bookDescription === "" ||
		pagesNumber === ""
	) {
		alert("Please fill in all fields.");
		return;
	}

	const book = { bookName, authorName, bookDescription, pagesNumber };
	books.push(book);
	displayBooks();
	clearInputs();
}

function displayBooks() {
	const bookList = document.getElementById("books");
	bookList.innerHTML = "";

	if (books.length === 0) {
		const row = document.createElement("tr");
		row.innerHTML = `
            <td colspan="6" class="text-center">No books available</td>
        `;
		bookList.appendChild(row);
		return;
	}
	books.forEach((book, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `
      <td>${index + 1}</td>
      <td>${book.bookName}</td>
      <td>${book.authorName}</td>
      <td>${book.bookDescription}</td>
      <td>${book.pagesNumber}</td>
      <td>
      <button class="btn btn-warning btn-sm" onclick="editBook(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">Delete</button>
      </td>
    `;
		bookList.appendChild(row);
	});
}

function deleteBook(index) {
	books.splice(index, 1);
	displayBooks();
}

function editBook(index) {
	const book = books[index];
	document.getElementById("bookName").value = book.bookName;
	document.getElementById("authorName").value = book.authorName;
	document.getElementById("bookDescription").value = book.bookDescription;
	document.getElementById("pagesNumber").value = book.pagesNumber;
	books.splice(index, 1);
	displayBooks();
}

function clearInputs() {
	document.getElementById("bookName").value = "";
	document.getElementById("authorName").value = "";
	document.getElementById("bookDescription").value = "";
	document.getElementById("pagesNumber").value = "";
}

document.addEventListener("DOMContentLoaded", displayBooks);

// Query selectors
const form = document.querySelector("form");
const book_name = document.querySelector("#name");
const author_name = document.querySelector("#author");
const page_count = document.querySelector("#pages");
const read_input = document.querySelector("#status");
const btn_add = document.querySelector("#addBtn");
const btn_delete = document.querySelector(".delete-button");
removeButton(btn_delete);



// Event listeners
form.addEventListener("submit", (e) => {e.preventDefault(); addBook(book_name.value,author_name.value,page_count.value,read_input.value); form.reset()});
// btn_add.addEventListener("click", () => addBook(book_name.value,author_name.value,page_count.value));




// Objects/Constructor
const myLibrary = [];

function Book(name, author, pages, status) {
    // Book constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = status;
}
Book.prototype.readBook = function() {
    this.read = !this.read;
}

function addBook(name, author, pages, status_input) {
    // take parameters, create book, store in library array
    let status = false;
    if (status_input=="yes"){ status=true};
    const newBook = new Book(name, author, pages, status);
    myLibrary.push(newBook);
    updateLibrary(newBook);}

function updateLibrary(book) {
    const table_body = document.querySelector("table");
    const new_row = table_body.insertRow();
    new_row.dataset.id = book.id;
    new_row.insertCell().textContent = book.name;
    new_row.insertCell().textContent = book.author;
    new_row.insertCell().textContent = book.pages;
    
    // Status button
    const new_btn_status = document.createElement('button');
    book.read==false ? new_btn_status.textContent="Not read":new_btn_status.textContent="Read";
    new_row.insertCell().appendChild(new_btn_status);

    // Remove button
    const new_btn_delete = document.createElement('button');
    new_row.insertCell().appendChild(removeButton(new_btn_delete));

}

// Remove button functionality
function removeButton(button) {
    button.textContent = "Remove";
    button.classList.add("delete-button");
    button.addEventListener('click', (e) => (removeBook(e)));
    return button;
}

function removeBook(event) {
    const delete_row = event.target.closest('tr');
    const delete_id = delete_row.dataset.id;
    delete_row.remove();
    const pos = myLibrary.map(book => book.id).indexOf(delete_id);
    if (pos > -1) {
        myLibrary.splice(pos, 1);
    }

}

// Read button functionality

function statusButton(button) {
}
const myLibrary = [];

function Book(name, author, pages, year) {
    // Book constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = false;
}
Book.prototype.readBook = function() {
    this.read = !this.read;
}

function addBook(name, author, pages, year) {
    // take parameters, create book, store in library array
    const newBook = new Book(name, author, pages, year);
    myLibrary.push(newBook);

    // Change to event listener???
    updateLibrary();
}

function updateLibrary() {
    for (const elem of myLibrary) {
        // Change to DOM update:
        console.log(elem); 
    }
}

function removeBook(ID) {
    const pos = myLibrary.map(book => book.id).indexOf(ID);
    if (pos > -1) {
        myLibrary.splice(pos, 1);
    }
}

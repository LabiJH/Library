let myLibrary = []; //Lib. Array
let addButton = document.querySelector("#addBtn");
let submit = document.querySelector("#submitBtn");
let formContainer = document.querySelector("#formContainer");
let bookshelf = document.querySelector(".bookshelf");

/* Form DOM Getters */
let titleForm = document.querySelector("#titleForm");
let authorForm = document.querySelector("#authorForm");
let pagesForm = document.querySelector("#pagesForm");
let readForm = document.querySelector("#readForm");

/* Book Functions for DOM Manipulation*/ 
const newCard = document.createElement("div");
newCard.classList.add("bookCard");

const titleDOM = document.createElement("div");
const authorDOM = document.createElement("div");
const pagesDOM = document.createElement("div");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book); // adding the Book Object to the Library Array
}

let theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 310, false);
let theHobbitTwo = new Book("The Hobbit", "J. R. R. Tolkien", 310, false);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbitTwo);
console.table(myLibrary);

/* Function for the Form Menu */
addButton.addEventListener("click", () => {
    if (formContainer.style.display == "none") {
        formContainer.style.display = "flex";
    }
    else {
        formContainer.style.display = "none";
    }
})

window.addEventListener("load", () => {
    for (let i = 0; i <= myLibrary.length; i++) {
        /* Responsive Variable Declaration on Load */ 
        const titleDOM = document.createElement("div");
        const authorDOM = document.createElement("div");
        const pagesDOM = document.createElement("div");
        const newCard = document.createElement("div");
        newCard.classList.add("bookCard");

        /* Getting Data from the Array */
        titleDOM.innerText += myLibrary[i].title;
        titleDOM.classList.add("bookTitle");
        authorDOM.innerText += myLibrary[i].author;
        authorDOM.classList.add("author");
        pagesDOM.innerText += myLibrary[i].pages;
        pagesDOM.classList.add("pages");
        
        /* Putting it into the DOM +*/
        newCard.appendChild(titleDOM);
        newCard.appendChild(authorDOM);
        newCard.appendChild(pagesDOM);
        bookshelf.appendChild(newCard);
    }
})

submit.addEventListener("click", () => {
   

})
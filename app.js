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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book); // adding the Book Object to the Library Array
}

/* Function for the Form Menu */
addButton.addEventListener("click", () => {
    if (formContainer.style.display === "none") {
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
        newCard.setAttribute("data-id", myLibrary.length);


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
    /* Check if the Forms have Input */
    if (titleForm.value != "" && authorForm.value != "" && pagesForm.value != "") {
        let book = new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked);
        addBookToLibrary(book);

        for (let i = myLibrary.length - 1; i <= myLibrary.length; i++) {
            /* Responsive Variable Declaration on Load */
            const removeBtnDOM = document.createElement("input");
            removeBtnDOM.setAttribute("id", "removeBtn");
            removeBtnDOM.setAttribute("type", "button");
            removeBtnDOM.setAttribute("value", "Remove Book?");
            const titleDOM = document.createElement("div");
            const authorDOM = document.createElement("div");
            const pagesDOM = document.createElement("div");

            /* Read Button, extra Attributes because of the Button + Text */
            const readDOM = document.createElement("div");

            /* Read Button End */

            const newCard = document.createElement("div");
            newCard.classList.add("bookCard");
            newCard.setAttribute("data-id", myLibrary.length - 1);

            /* Getting Data from the Array + filling the DOM Elements with Information*/
            titleDOM.innerText += myLibrary[i].title;
            titleDOM.classList.add("bookTitle");
            authorDOM.innerText += myLibrary[i].author;
            authorDOM.classList.add("author");
            pagesDOM.innerText += myLibrary[i].pages;
            pagesDOM.classList.add("pages");

            /* Check if the Book is read to apply the specific CSS Class */
            if (myLibrary[i].read == true) {
                const readBTN = document.createElement("input");
                readBTN.setAttribute("id", "readBtnTrue");
                readBTN.setAttribute("type", "button");
                readDOM.innerHTML += ("Read?:");     // Text besides the Button
                readDOM.classList.add("read");
                readDOM.appendChild(readBTN);
            } else {
                const readBTN = document.createElement("input");
                readBTN.setAttribute("id", "readBtn");
                readBTN.setAttribute("type", "button");
                readDOM.innerHTML += ("Read?:");     // Text besides the Button
                readDOM.classList.add("read");
                readDOM.appendChild(readBTN);
            }

            /* Putting it into the DOM */
            newCard.appendChild(removeBtnDOM);
            newCard.appendChild(titleDOM);
            newCard.appendChild(authorDOM);
            newCard.appendChild(pagesDOM);
            newCard.appendChild(readDOM);
            bookshelf.appendChild(newCard);
        }
    } else {
        alert("Bitte fülle die Form aus.");
    }
})
/* Removing Books from the DOM + Array */
document.addEventListener("click", function(e){
    if(e.target && e.target.id == "removeBtn"){
        let id = e.target.parentElement.dataset.id;
        myLibrary.splice(id, 1);
        console.log(id);
        console.log(myLibrary);
        console.log(e.target.parentElement.remove());
    }
    
})
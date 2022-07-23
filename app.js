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

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book); // adding the Book Object to the Library Array
}

/* Function for the Form Menu */
addButton.addEventListener("click", ()=>{
    if (formContainer.style.display == "none")
    {
        formContainer.style.display = "flex";
    } 
    else 
    {
        formContainer.style.display = "none";
    }
})

submit.addEventListener("click", ()=>{
    const newCard = document.createElement("div");
    newCard.classList.add("bookCard");

    const titleDOM = document.createElement("div");
    titleDOM.classList.add("bookTitle");
    titleDOM.innerText += titleForm.value;
    titleForm.value = "";
    newCard.appendChild(titleDOM);

    const authorDOM = document.createElement("div");
    authorDOM.classList.add("author");
    authorDOM.innerText += authorForm.value;
    authorForm.value = "";
    newCard.appendChild(authorDOM);

    const pagesDOM = document.createElement("div");
    pagesDOM.classList.add("pages");
    pagesDOM.innerText += pagesForm.value;
    pagesForm.value = "";
    newCard.appendChild(pagesDOM);



    bookshelf.appendChild(newCard);

})
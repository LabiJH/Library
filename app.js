let myLibrary = []; //Lib. Array
let addButton = document.querySelector("#addBtn");
let formContainer = document.querySelector("#formContainer");

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
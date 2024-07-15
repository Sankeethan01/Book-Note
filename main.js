var boxOverlay = document.querySelector(".overlay")
var boxPop = document.querySelector(".popupbox")
var popBtn = document.querySelector(".btn")

popBtn.addEventListener("click", function () {
    boxOverlay.style.display = "block"
    boxPop.style.display = "block"
})

var cancelbtn = document.getElementById("cancel-Book")

cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    boxOverlay.style.display = "none"
    boxPop.style.display = "none"
})

var mainContainer = document.querySelector(".main-container")
var addBook = document.getElementById("add-Book")
var bookName = document.getElementById("bookName")
var bookAuthor = document.getElementById("bookAuthor")
var bookDes = document.getElementById("bookDes")

addBook.addEventListener("click", function (event) {
    event.preventDefault()
    var box = document.createElement("div")
    box.setAttribute("class", "container")
    box.innerHTML = `<h2>${bookName.value}</h2>
    <h4>${bookAuthor.value}</h4>
            <p>${bookDes.value}</p>
            <button onclick="deleteBook(event)">Delete</button>`
    mainContainer.append(box)

    boxOverlay.style.display = "none"
    boxPop.style.display = "none"
    
})

function deleteBook(event)
{
    event.target.parentElement.remove()
}
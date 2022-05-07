document.querySelector('button').addEventListener('click', postResults)
let toDoContainer = document.getElementById('container')
let inputfield = document.getElementById('myInput')

function postResults() {
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-style')
    paragraph.innerText = inputfield.value

    toDoContainer.appendChild(paragraph)

    inputfield.value = ''

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    })


    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph)
    })



}
  
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})



// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(function(json) {
//     console.log(json)
//     const oneUrl = json[0].url
//     const pgraph = document.createElement('p')
//     pgraph.textContent = oneUrl
//     const b = document.querySelector('body')
//     b.append(pgraph)
//     // debugger
//   })
//   // .then(json => console.log(json));
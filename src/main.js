function generateBookList(data) {
    const bookListElement = document.getElementById('bookList');
    const books = data.books;
    
    // Create an empty string to store HTML content
    let htmlContent = '';

    
    
    // Use a for loop to iterate through the books array
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        let yearClass = 'year'
        if (book.year < 1945) {
            yearClass += ' old';
        }
        
        // Append HTML content for each book
        htmlContent += `
        <div class="book">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p class="${yearClass}"><strong>Year:</strong> ${book.year}</p>
        </div>
        `;
    }
    
    // Set the HTML content in the element
    bookListElement.innerHTML = htmlContent;
}

// Load JSON data and then generate the book list
loadJSON('public/books.json').then(generateBookList);
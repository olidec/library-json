function generateBookList(data) {
    const bookListElement = document.getElementById('bookList');
    const books = data.books;
    
    // Create an empty string to store HTML content
    let htmlContent = '';
    
    // Use a for loop to iterate through the books array
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        
        // Append HTML content for each book
        htmlContent += `
        <div>
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        </div>
        `;
    }
    
    // Set the HTML content in the element
    bookListElement.innerHTML = htmlContent;
}

loadJSON('public/books.json').then(generateBookList);